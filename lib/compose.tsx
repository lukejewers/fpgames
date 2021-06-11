export const compose = (...fs: ((x: any) => any)[]) => (x: any) =>
  fs.reduceRight((acc, f) => f(acc), x);
