"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LShapedSummary = require('../database/L-Shaped-Summary.json');
const CHSSummary = require('../database/CHS-Summary.json');
const IShapedSummary = require('../database/I-Shaped-Summary.json');
const RHSSummary = require('../database/RHS-Summary.json');
const UShapedSummary = require('../database/U-Shaped-Summary.json');
const router = (0, express_1.Router)();
router.get("/l-shaped", (req, res, next) => {
    const responseData = [];
    for (const elem of LShapedSummary) {
        const { data, vector, definition } = elem, rest = __rest(elem, ["data", "vector", "definition"]);
        responseData.push(rest);
    }
    res.json(responseData);
});
router.get("/chs", (req, res, next) => {
    const responseData = [];
    for (const elem of CHSSummary) {
        const { data, vector, definition } = elem, rest = __rest(elem, ["data", "vector", "definition"]);
        responseData.push(rest);
    }
    res.json(responseData);
});
router.get("/i-shaped", (req, res, next) => {
    const responseData = [];
    for (const elem of IShapedSummary) {
        const { data, vector, definition } = elem, rest = __rest(elem, ["data", "vector", "definition"]);
        responseData.push(rest);
    }
    res.json(responseData);
});
router.get("/rhs", (req, res, next) => {
    const responseData = [];
    for (const elem of RHSSummary) {
        const { data, vector, definition } = elem, rest = __rest(elem, ["data", "vector", "definition"]);
        responseData.push(rest);
    }
    res.json(responseData);
});
router.get("/u-shaped", (req, res, next) => {
    const responseData = [];
    for (const elem of UShapedSummary) {
        const { data, vector, definition } = elem, rest = __rest(elem, ["data", "vector", "definition"]);
        responseData.push(rest);
    }
    res.json(responseData);
});
exports.default = router;
