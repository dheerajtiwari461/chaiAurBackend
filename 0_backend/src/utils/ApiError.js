class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors=[],
        stack = ""
){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(stack){
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}

// class ApiError extends Error {
//   constructor(messages123, data ) {
//     super(messages123);
//     this.messages123 = messages123;
//     this.data = data;
//   }
// }

// let apiError = new ApiError(12, 23);

// console.log(apiError.messages123 );


