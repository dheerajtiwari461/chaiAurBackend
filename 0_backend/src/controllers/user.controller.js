import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from "../utils/ApiError.js"
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'

const registerUser = asyncHandler(async(req, res)=>{
      // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const {fullName, email, username, password } = req.body;
    console.log("email", email);

    if([fullName, email, username, password].some((field)=>{
      field?.trim() === ""
    })){
      throw new ApiError(400, "All fields are required");
    }

    const existedUser = User.findOne({
      $nor:({username},{email})
    })

    if(existedUser){
      throw new ApiError(400, "User with this email or username already exists")
    };

    const avatarLocalPath = req.files?.avatar[0]?.path;
   const coverImageLocalPath = req.files?.coverImage[0]?.path;

   if(!avatarLocalPath){
      throw new ApiError(400, "Avatar is required")
   }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath); 

    if (!avatar) {
      throw new ApiError(400, "User with this email or username already exists")
    }

    const user = await User.create({
      fullName,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      username: username.toLowerCase(),
      password
    })

    const createUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createUser) {
      throw new ApiError(500, 'something went wrong while registering user') 
    }
    
})


export {registerUser}