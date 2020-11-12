import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const mLab = `mongodb://erpqu:password@103.112.163.253:27017/erpqu`;

mongoose
  // .connect(`${process.env.MONGO_URI_1}:${process.env.MONGO_PORT}/erpqu`, {
  .connect(mLab, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("Error saat membuat koneksi ke server mongodb");
  });

const db = mongoose.connection;

mongoose.connection.on("connected", function () {
  console.log(
    // "Mongoose default connection open to " + `${process.env.MONGO_URI_1}:${process.env.MONGO_PORT}`
    "Mongoose default connection open to @ds035787.mlab.com:35787/erpqu"
  );
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: @ds035787.mlab.com:35787/erpqu");
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});
export default db;
