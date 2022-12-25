const mongoose = require("mongoose");
const UserModel = require("../model/Users");
const ProductModel = require("../model/Products");
const datas = require("./data");
mongoose.connect("mongodb://127.0.0.1:27017/MERN");

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Database connection opened");
  UserModel.insertMany(datas.users, (err) => {
    if (err) {
      console.error(error);
    }
  });
  ProductModel.insertMany(datas.products, (err) => {
    if (err) {
      console.error(error);
    }
  });
});
