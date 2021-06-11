export const length = (xs: any[]) => xs.length;

export const _length = (xs: any[]) =>
  xs.map((x) => (x = 1)).reduce((acc, x) => acc + x);
