export const flip = (f: (x: any) => (y: any) => any) => (x: any) => (y: any) =>
  f(y)(x);
