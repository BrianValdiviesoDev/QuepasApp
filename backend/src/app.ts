import "dotenv/config";
import express from "express";
import cors from "cors";

//import routes
import { userRouter } from "./users/user.routes";
import dbConnect from "./config/mongo";

const port = process.env.API_PORT;
const app = express();

conectDB();

app.use(cors());

app.use(userRouter);

app.listen(port, () => {
  console.log("QuepasApp - API");
  console.log("Developed by: Brian Valdivieso");
  console.log("Listen on " + process.env.API_URL + ":" + port);
});

async function conectDB() {
  await dbConnect()
    .then(() => {
      console.log("DB connected");
    })
    .catch(() => {
      console.log("DB error!");
    });
}
