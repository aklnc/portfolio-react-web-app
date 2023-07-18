"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (input) => {
    let A_prime = input.b - input.t;
    let B_prime = input.h - input.t;
    let square = 2 * input.t ** 2 - (Math.PI * input.t ** 2) / 4;
    let u = (2 * (A_prime + B_prime) + 4 * input.t) / 1000;
    let a = input.t * (A_prime + B_prime) + square;
    let g = (a * 7.85) / 1000;
    let yc = ((input.t / 2) * (input.b ** 2 + input.h * input.t - input.t ** 2)) / a;
    let zc = ((input.t / 2) * (input.h ** 2 + input.b * input.t - input.t ** 2)) / a;
    let iy = (input.t * (input.h - zc) ** 3 +
        input.b * zc ** 3 -
        (input.b - input.t) * (zc - input.t) ** 3) /
        3;
    let iz = (input.t * (input.b - yc) ** 3 +
        input.h * yc ** 3 -
        (input.h - input.t) * (yc - input.t) ** 3) /
        3;
    let pieceWeight = (g * input.length) / 1000;
    let totalWeight = pieceWeight * input.qty;
    return {
        a: parseFloat((a / 100).toFixed(2)),
        g: parseFloat(g.toFixed(2)),
        u: parseFloat(u.toFixed(3)),
        yc: parseFloat(yc.toFixed(1)),
        zc: parseFloat(zc.toFixed(1)),
        iy: parseFloat((iy / 10000).toFixed(2)),
        iz: parseFloat((iz / 10000).toFixed(2)),
        pieceWeight: parseFloat(pieceWeight.toFixed(2)),
        totalWeight: parseFloat(totalWeight.toFixed(1)),
    };
};
