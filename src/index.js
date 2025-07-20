// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runing at port: ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!", err);
  });

//Part 1
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import { express } from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening  on the port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error", error);
    throw err;
  }
})();
*/
