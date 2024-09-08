import express from "express";
import transactionRoutes from "./routes/transactions.route.js";
import connectDB from "./Database/db.js";
import userRoutes from "./routes/users.routes.js";
import cors from "cors";

const app = express();
const PORT = 4000;

// Data understanding middlewares
app.use(express.json());

// imort cors
app.use(cors());

// ConnectDB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

// Client --> Middileware -->Server
app.use("/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, (req, res) => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
