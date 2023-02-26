import "dotenv/config";
import express from "express";
import cors from "cors";


const port = process.env.API_PORT;
const app = express();

app.use(cors());

app.listen(port, ()=>{
    console.log("QuepasApp - API");
    console.log("Developed by: Brian Valdivieso");
    console.log("Listen on "+process.env.API_URL+":"+port);
})