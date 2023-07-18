interface CShapedInput {
  h: number;
  b: number;
  c: number;
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
  let h_prime = input.h - 2 * input.t;
  let b_prime = input.b - 2 * input.t;
  let c_prime = input.c - input.t;
  let u = (2 * (h_prime + 2 * (b_prime + c_prime)) + 10 * input.t) / 1000;

  // Calculation of area
  let calc1 = input.h * input.t;
  let calc2 = (input.b - input.t) * input.t * 2;
  let calc3 = (input.c - input.t) * input.t * 2;
  let calc4 = -4 * ((2 * input.t) ** 2 - (Math.PI * (2 * input.t) ** 2) / 4);
  let calc5 = 4 * (input.t ** 2 - (Math.PI * input.t ** 2) / 4);
  let a = calc1 + calc2 + calc3 + calc4 + calc5;

  let g = (a * 7.85) / 1000;
  let plateWidth = input.h + 2 * (input.b + input.c) - 8 * input.t;

  let yc1 = h_prime * input.t;
  let yc2 = 2 * input.b * input.t;
  let yc3 = c_prime * input.t;

  let yc =
    (yc1 * input.t + (yc2 * input.b) / 2 + yc3 * (input.b - input.t / 2)) /
    (yc1 + yc2 + yc3);

  let iy1 = (input.t * h_prime ** 3) / 12;

  let iy2 =
    (input.b * input.t ** 3) / 12 +
    input.b * input.t * ((input.h - input.t) / 2) ** 2;

  let iy3 =
    (input.t * c_prime ** 3) / 12 +
    input.t * c_prime * ((input.h - input.c - 3 * input.t) / 2) ** 2;

  let iy = iy1 + 2 * iy2 + 2 * iy3;

  let iz1 =
    (h_prime * input.t ** 3) / 12 + h_prime * input.t * (yc - input.t / 2) ** 2;

  let iz2 =
    (input.t * input.b ** 3) / 12 + input.b * input.t * (input.b / 2 - yc) ** 2;

  let iz3 =
    ((input.c - input.t) * input.t ** 3) / 12 +
    (input.c - input.t) * input.t * ((input.b - input.t) / 2 - yc) ** 2;

  let iz = iz1 + 2 * iz2 + 2 * iz3;

  let sy = (2 * iy) / input.h;

  let sz = iz / (input.b - yc);

  let zy1 = (input.h ** 2 * input.t) / 4;

  let zy2 = input.b * input.t * (input.h - input.t);

  let zy3 = input.t * (input.c - input.t) * (input.h - input.c - 3 * input.t);

  let zy = zy1 + zy2 + zy3;

  let zz1 = (input.t * h_prime * (input.b - input.t)) / 2;

  let zz2 = (input.b ** 2 * input.t) / 4;

  let zz3 = c_prime * input.t * (input.b - input.t);

  let zz = zz1 + zz2 + zz3;

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
