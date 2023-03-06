import "dotenv/config";
import { connect } from "mongoose";

let mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

if (process.env.DB_USER && process.env.DB_PASSWORD) {
  mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
}

async function dbConnect(): Promise<void> {
  await connect(mongoUri);
}

export default dbConnect;
