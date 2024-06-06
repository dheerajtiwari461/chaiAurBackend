import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({express: true, limit: '16kb'}));
app.use(express.static('public'));
app.use(cookieParser());


//routes import 
import userRoutes from "./routes/user.routes.js";

// routes delcration
app.use("/api/v1/users", userRoutes);

// http://localhost:8000/api/v1/users/register


export {app};