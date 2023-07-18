interface CShapedInput {
  h: number;
  b: number;
  t: number;
  qty: number;
  length: number;
}

interface CShapedOutput {
  g: number;
  u: number;
  a: number;
  yc: number;
  iy: number;
  iz: number;
  sy: number;
  sz: number;
  zy: number;
  zz: number;
  plateWidth: number;
  pieceWeight: number;
  totalWeight: number;
}

export default (input: CShapedInput): CShapedOutput => {
  // Calculation of perimeter
  // Calculation of perimeter
  let h_prime = input.h - 2 * input.t;
  let b_prime = input.b - input.t;
  let perimeter = 2 * (h_prime + 2 * b_prime) + 6 * input.t;

  // Calculation of a
  let plateWidth = input.h + 2 * input.b - 4 * input.t;
  let a = plateWidth * input.t;

  let g = (a * 7.85) / 1000;
  let u = perimeter / 1000;

  let yc1 = h_prime * input.t;
  let yc2 = 2 * input.b * input.t;

  let yc =
    (yc1 * input.t + (yc2 * input.b) / 2 ) /
    (yc1 + yc2);

  let iy1 = (input.t * h_prime ** 3) / 12;

  let iy2 =
    (input.b * input.t ** 3) / 12 +
    input.b * input.t * ((input.h - input.t) / 2) ** 2;

  let iy = iy1 + 2 * iy2;

  let iz1 =
    (h_prime * input.t ** 3) / 12 + h_prime * input.t * (yc - input.t / 2) ** 2;

  let iz2 =
    (input.t * input.b ** 3) / 12 + input.b * input.t * (input.b / 2 - yc) ** 2;

  let iz = iz1 + 2 * iz2;

  let sy = (2 * iy) / input.h;

  let sz = iz / (input.b - yc);

  let zy1 = (input.h ** 2 * input.t) / 4;

  let zy2 = input.b * input.t * (input.h - input.t);

  let zy = zy1 + zy2;

  let zz1 = (input.t * h_prime * (input.b - input.t)) / 2;

  let zz2 = (input.b ** 2 * input.t) / 4;

  let zz = zz1 + zz2;

  let pieceWeight = (g * input.length) / 1000;

  let totalWeight = pieceWeight * input.qty;
  
  return {
    a: parseFloat((a / 100).toFixed(2)),
    g: parseFloat(g.toFixed(2)),
    u: parseFloat(u.toFixed(3)),
    yc: parseFloat(yc.toFixed(1)),
    iy: parseFloat((iy / 10000).toFixed(2)),
    iz: parseFloat((iz / 10000).toFixed(2)),
    sy: parseFloat((sy / 1000).toFixed(2)),
    sz: parseFloat((sz / 1000).toFixed(2)),
    zy: parseFloat((zy / 1000).toFixed(2)),
    zz: parseFloat((zz / 1000).toFixed(2)),
    plateWidth: parseFloat(plateWidth.toFixed(1)),
    pieceWeight: parseFloat(pieceWeight.toFixed(2)),
    totalWeight: parseFloat(totalWeight.toFixed(1)),
  };
};
