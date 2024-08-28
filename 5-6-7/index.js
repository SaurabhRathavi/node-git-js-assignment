import { connect } from "mongoose";
import express, { json } from "express";
import productRoutes from "./src/routes/products.js";
import authRoutes from "./src/routes/auth.js";
import requestLogger from "./src/controllers/requestLogger.js";

const app = express();


connect("mongodb://localhost:27017/products")
.then(() => {
  console.log("mongo connected");
})
.catch((e) => {
  console.log(e);
});

app.use(express.json());
app.use(requestLogger)

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("server started");
});
