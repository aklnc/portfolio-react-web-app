"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CHS_1 = __importDefault(require("../builtup-app/CHS"));
const CShaped_1 = __importDefault(require("../builtup-app/CShaped"));
const IShaped_1 = __importDefault(require("../builtup-app/IShaped"));
const LShaped_1 = __importDefault(require("../builtup-app/LShaped"));
const Plate_1 = __importDefault(require("../builtup-app/Plate"));
const RHS_1 = __importDefault(require("../builtup-app/RHS"));
const Rod_1 = __importDefault(require("../builtup-app/Rod"));
const UShaped_1 = __importDefault(require("../builtup-app/UShaped"));
const router = (0, express_1.Router)();
router.post("/chs", (req, res, next) => {
    res.json((0, CHS_1.default)(req.body));
});
router.post("/c-shaped", (req, res, next) => {
    res.json((0, CShaped_1.default)(req.body));
});
router.post("/i-shaped", (req, res, next) => {
    res.json((0, IShaped_1.default)(req.body));
});
router.post("/l-shaped", (req, res, next) => {
    res.json((0, LShaped_1.default)(req.body));
});
router.post("/plate", (req, res, next) => {
    res.json((0, Plate_1.default)(req.body));
});
router.post("/rhs", (req, res, next) => {
    res.json((0, RHS_1.default)(req.body));
});
router.post("/rod", (req, res, next) => {
    res.json((0, Rod_1.default)(req.body));
});
router.post("/u-shaped", (req, res, next) => {
    res.json((0, UShaped_1.default)(req.body));
});
exports.default = router;
