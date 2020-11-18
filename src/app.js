import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
// import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import logger from "./config/winston.config";
import swaggerConfig from "./swagger.json";
import db from "./config/mongoose.config";
import apiRoute from "./api/api.v1";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan("dev", { stream: logger.stream }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(apiRoute);
app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on http://localhost:${process.env.SERVER_PORT}`)
);
