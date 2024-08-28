import mongoose from "mongoose";

export default async () => {
  await mongoose
    .connect("mongodb://localhost:27017/products")
    .then(() => {
      console.log("connection successfull");
    })
    .catch((e) => {
      console.log(e);
    });
};
