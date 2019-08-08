import express from "express";
//const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

// request object, response object
const handleHome = (req, res) => res.send("Hello from home!!");

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
