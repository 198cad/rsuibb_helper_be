import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import logger from "./config/winston.config";
import db from "./config/mongoose.config";
import userRouter from "./api/user/user.router";
import apiRoute from "./api/api.v1";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev", { stream: logger.stream }));

import { roles } from "./config/roles.config";
app.get("/", roles("Hello", "World", "Admin"), (req, res) => {
  res.send("Hello !");
  World;
});

app.use(userRouter);
app.use(apiRoute);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on http://localhost:${process.env.SERVER_PORT}`)
);
