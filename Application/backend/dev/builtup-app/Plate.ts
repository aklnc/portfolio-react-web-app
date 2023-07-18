interface PlateInput {
  b: number;
  t: number;
  qty: number;
  length: number;
}

interface PlateOutput {
  g1: number;
  g2: number;
  u: number;
  a: number;
  pieceWeight: number;
  totalWeight: number;
}

export default (input: PlateInput): PlateOutput => {
  let g1 = input.t * 7.85;
  let a = input.t * input.b;
  let g2 = (a * 7.85) / 1000;
  let u = (2 * (input.b + input.t)) / 1000;

  let pieceWeight = (g2 * input.length) / 1000;

  let totalWeight = pieceWeight * input.qty;

  return {
    a: parseFloat((a / 100).toFixed(2)),
    g1: parseFloat(g1.toFixed(2)),
    g2: parseFloat(g2.toFixed(2)),
    u: parseFloat(u.toFixed(3)),
    pieceWeight: parseFloat(pieceWeight.toFixed(2)),
    totalWeight: parseFloat(totalWeight.toFixed(1)),
  };
};
