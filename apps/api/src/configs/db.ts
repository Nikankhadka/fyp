import { connect, set } from "mongoose";

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

    await connect(mongoUri);
    console.log("Database Connected");

    console.log("Next Called");
  } catch (e) {
    console.log(e);
  }
};

export default dbConnect;
