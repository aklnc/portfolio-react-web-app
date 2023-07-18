"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (input) => {
    let a = (Math.PI * input.d ** 2) / 4;
    let perimeter = input.d * Math.PI;
    let g = (a * 7.85) / 1000;
    let u = perimeter / 1000;
    let pieceWeight = (g * input.length) / 1000;
    let totalWeight = pieceWeight * input.qty;
    return {
        a: parseFloat((a / 100).toFixed(2)),
        g: parseFloat(g.toFixed(2)),
        u: parseFloat(u.toFixed(3)),
        pieceWeight: parseFloat(pieceWeight.toFixed(2)),
        totalWeight: parseFloat(totalWeight.toFixed(1)),
    };
};
