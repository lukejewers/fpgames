export const both = (f: (x: any) => boolean) => (g: (x: any) => boolean) => (
  x: any
) => f(x) && g(x);
