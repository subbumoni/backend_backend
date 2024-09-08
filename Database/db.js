import mongoose from "mongoose";
import dotenv from "dotenv";
//mongoodb
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB CONNECTED...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
