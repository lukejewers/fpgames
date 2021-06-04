export const difference = (xs: any[]) =>
  xs.reduce((a, b) => a.filter((c: any) => !b.includes(c)));

export const _difference = ([xs, ys]: [any, any]) => {
  const s = new Set(ys);
  return xs.filter((x: any) => !s.has(x));
};
