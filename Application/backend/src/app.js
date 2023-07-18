"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const builtup_routes_1 = __importDefault(require("./routes/builtup-routes"));
const database_summary_routes_1 = __importDefault(require("./routes/database-summary-routes"));
const database_element_routes_1 = __importDefault(require("./routes/database-element-routes"));
const PORT = 8003;
/*const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  Headers: "Access-Control-Allow-Origin",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};*/
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
/*app.use(cors());*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/builtup-app", builtup_routes_1.default);
app.use("/api/database/summary", database_summary_routes_1.default);
app.use("/api/database/element", database_element_routes_1.default);
app.get("/", (req, res, next) => {
    res.json({ message: "hi there!" });
});
app.listen(PORT, () => {
    console.log(`Port ${PORT} is listening...`);
});
