export const filter = (p: (x: any) => boolean) => (xs: any[]) => xs.filter(p);

export const _filter = (p: (x: any) => boolean) => (xs: any[]) =>
  xs.reduce((acc, x) => (p(x) ? acc.concat(x) : acc), []);
