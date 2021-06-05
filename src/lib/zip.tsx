export const zip = ([xs, ys]: any[]) =>
  xs.map((x: any, i: number) => [x, ys[i]]);
