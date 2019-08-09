import express from "express";
import morgan from "morgan";
import helmet from "helmet"; // 보안
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

// request object, response object
const handleHome = (req, res) => res.send("Hello from home!!");

const handleProfile = (req, res) => res.send("You are on my profile123");

// middle ware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

////////////////////////////////
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
