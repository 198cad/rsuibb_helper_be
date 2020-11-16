import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const helper = `
mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}
`;

mongoose
  .connect(helper, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`database connected ${process.env.MONGO_DB}@${process.env.MONGO_HOST}`);
  })
  .catch((err) => {
    console.log("Error saat membuat koneksi ke server mongodb");
  });

const db = mongoose.connection;

mongoose.connection.on("connected", function () {
  console.log(`Mongoose default connection open to ${process.env.MONGO_DB}@${process.env.MONGO_HOST}`);
});

mongoose.connection.on("error", function (err) {
  console.log(`Mongoose default connection error: ${process.env.MONGO_DB}@${process.env.MONGO_HOST}`);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});
export default db;
