import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {

    console.log("DB_NAME", DB_NAME);
    console.log("MONGO_USER_NAME", process.env);
    console.log("MONGO_PASSWORD", process.env.MONGO_PASSWORD);
    const MONGODB_URI = `mongodb://${process.env.MONGO_USER_NAME}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@164.52.212.238:27017/?directConnection=true&authSource=${DB_NAME}&appName=mongosh+2.1.4`;
    try {
        const connectionInstance = await mongoose.connect(MONGODB_URI)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB