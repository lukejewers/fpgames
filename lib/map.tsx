export const map = (f: (x: any) => any) => (xs: any[]) => xs.map(f);

export const _map = (f: (x: any) => any) => (xs: any[]) =>
  xs.reduce((acc, x) => [...acc, f(x)], []);
