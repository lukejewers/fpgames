export const init = (xs: any[]) => xs.slice(0, xs.length - 1);

export const _init = (xs: any[]) =>
  xs.reduce((acc, x, i, arr) => (i < arr.length - 1 ? acc.concat(x) : acc), []);
