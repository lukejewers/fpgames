export const pipe = (...fs: ((x: any) => any)[]) => (x: any) =>
  fs.reduce((acc, f) => f(acc), x);
