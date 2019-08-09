import express from "express";
//const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

// request object, response object
const handleHome = (req, res) => res.send("Hello from home!!");

const handleProfile = (req, res) => res.send("You are on my profile123");

// middleware
const betweenHome = (req, rest, next) => {
  console.log("Between");
  next();
};

// 모든 웹 사이트에 적용될 middleware
app.use(betweenHome); // global

////////////////////////////////

app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
