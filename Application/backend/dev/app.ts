import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import builtupAppRoutes from "./routes/builtup-routes";
import databaseSummaryRoutes from "./routes/database-summary-routes";
import databaseElementRoutes from "./routes/database-element-routes";

const PORT = 5000;

/*const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  Headers: "Access-Control-Allow-Origin",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};*/

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

/*app.use(cors());*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api/builtup-app", builtupAppRoutes);
app.use("/api/database/summary", databaseSummaryRoutes);
app.use("/api/database/element", databaseElementRoutes);

app.get("/", (req, res, next) => {
  res.json({ message: "hi there!" });
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is listening...`);
});
