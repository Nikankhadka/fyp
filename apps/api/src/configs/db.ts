import { connect, connection, set } from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();
//return type of async function is promise
// mongodb+srv://nick11444:${process.env.dbPassword}@fypnikan.bud3xcp.mongodb.net/test

const dbConnect = async () => {
  try {
    // Preserve the current query parsing behavior and silence the Mongoose 7 warning.
    set("strictQuery", true);

    // Use local MongoDB container if MONGODB_URI is provided (Docker environment)
    // Otherwise use cloud MongoDB
    const mongoUri = process.env.MONGODB_URI || `mongodb://localhost:27017`;

    console.log("Connecting to MongoDB...");
    await connect(mongoUri);
    console.log("Database Connected");
  } catch (e) {
    console.error("Database connection failed:", e);
    throw e;
  }
};

export const isDatabaseReady = () => connection.readyState === 1;

export default dbConnect;
