interface IShapedInput {
  h: number;
  b: number;
  tw: number;
  tf: number;
  qty: number;
  length: number;
}

interface IShapedOutput {
  g: number;
  u: number;
  a: number;
  iy: number;
  iz: number;
  sy: number;
  sz: number;
  zy: number;
  zz: number;
  pieceWeight: number;
  totalWeight: number;
}

export default (input: IShapedInput): IShapedOutput => {
  let A_prime = (input.b - input.tw) / 2;
  let B_prime = input.h - 2 * input.tf;
  let perimeter = 2 * (input.b + 2 * input.tf + 2 * A_prime + B_prime);

  let a = 2 * input.b * input.tf + B_prime * input.tw;

  let g = (a * 7.85) / 1000;
  let u = perimeter / 1000;

  let iy =
    (input.b * input.h ** 3) / 12 -
    ((input.b - input.tw) * (input.h - 2 * input.tf) ** 3) / 12;
  let iz =
    (input.tf * input.b ** 3) / 6 +
    ((input.h - 2 * input.tf) * input.tw ** 3) / 12;

  let sy = (2 * iy) / input.h;
  let sz = (2 * iz) / input.b;

  let zy =
    (input.b * input.h ** 2) / 4 -
    ((input.b - input.tw) * (input.h - 2 * input.tf) ** 2) / 4;
  let zz =
    (input.tf * input.b ** 2) / 2 +
    ((input.h - 2 * input.tf) * input.tw ** 2) / 4;

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
