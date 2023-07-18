"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (input) => {
    let b_prime = input.b - 2 * input.t;
    let h_prime = input.h - 2 * input.t;
    let circle = (Math.PI * input.t ** 2) / 4;
    let perimeter = 2 * (b_prime + h_prime) + 2 * Math.PI * input.t;
    let a = 2 * input.t * (b_prime + h_prime) + circle;
    let g = (a * 7.85) / 1000;
    let u = perimeter / 1000;
    let iy = (input.b * input.h ** 3 - (input.b - 2 * input.t) * (input.h - 2 * input.t) ** 3) / 12;
    let iz = (input.h * input.b ** 3 - (input.h - 2 * input.t) * (input.b - 2 * input.t) ** 3) / 12;
    let sy = 2 * iy / input.h;
    let sz = 2 * iz / input.b;
    let zy = (input.b * input.h ** 2 - (input.b - 2 * input.t) * (input.h - 2 * input.t) ** 2) / 4;
    let zz = (input.h * input.b ** 2 - (input.h - 2 * input.t) * (input.b - 2 * input.t) ** 2) / 4;
    let pieceWeight = (g * input.length) / 1000;
    let totalWeight = pieceWeight * input.qty;
    return {
        a: parseFloat((a / 100).toFixed(2)),
        g: parseFloat(g.toFixed(2)),
        u: parseFloat(u.toFixed(3)),
        iy: parseFloat((iy / 10000).toFixed(2)),
        iz: parseFloat((iz / 10000).toFixed(2)),
        sy: parseFloat((sy / 1000).toFixed(2)),
        sz: parseFloat((sz / 1000).toFixed(2)),
        zy: parseFloat((zy / 1000).toFixed(2)),
        zz: parseFloat((zz / 1000).toFixed(2)),
        pieceWeight: parseFloat(pieceWeight.toFixed(2)),
        totalWeight: parseFloat(totalWeight.toFixed(1)),
    };
};
