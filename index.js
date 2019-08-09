import express from "express"; //const express = require("express");
import morgan from "morgan";
import helmet from "helmet"; // 보안
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

// request object, response object
const handleHome = (req, res) => res.send("Hello from home!!");

const handleProfile = (req, res) => res.send("You are on my profile123");

// middle ware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

/*
// 연결 끊기
const middleware = (req, res, next) => {
  res.send("not happening");
};
*/
////////////////////////////////

// app.get("/", middleware, handleHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
