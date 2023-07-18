interface CHSInput {
  d: number;
  t: number;
  qty: number;
  length: number
}

interface CHSOutput {
  g: number;
  u: number;
  a: number;
  i: number;
  s: number;
  z: number;
  pieceWeight: number
  totalWeight: number
}

export default (input: CHSInput): CHSOutput => {


  let r = input.d / 2;
  let phi_prime = r - input.t;
  let u = 2 * r * Math.PI / 1000;

  let a = Math.PI * (r ** 2 - phi_prime ** 2);

  let g = (a * 7.85) / 1000;

  let dInner = input.d - 2 * input.t;

  let i = (Math.PI * (input.d ** 4 - dInner ** 4)) / 64;

  let s = (2 * i) / input.d;

  let z = (input.d ** 3 - dInner ** 3) / 6;

    let pieceWeight = g * input.length / 1000

    let totalWeight = pieceWeight * input.qty

  return {
    a: parseFloat((a / 100).toFixed(2)),
    g: parseFloat(g.toFixed(2)),
    u: parseFloat(u.toFixed(3)),
    i: parseFloat((i / 10000).toFixed(2)),
    s: parseFloat((s / 1000).toFixed(2)),
    z: parseFloat((z / 1000).toFixed(2)),
    pieceWeight: parseFloat(pieceWeight.toFixed(2)),
    totalWeight: parseFloat(totalWeight.toFixed(1))
  };
};
