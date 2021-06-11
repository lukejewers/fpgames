export const reverse = (xs: any[]) => xs.reverse();

export const _reverse = (xs: any[]) =>
  xs.reduce((acc, x) => [x].concat(acc), []);
