import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listeing on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// M : data -> DB
// V : how does the data look -> template
// C : fuction that looks for the data
