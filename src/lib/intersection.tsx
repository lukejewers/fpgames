export const intersection = (xs: any[]) =>
  xs.reduce((a, b) => a.filter((c: any) => b.includes(c)));

export const _intersection = ([xs, ys]: any[]) => {
  const s = new Set(ys);
  return xs.filter((x: any) => s.has(x));
};
