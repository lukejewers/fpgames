export const nub = (xs: any[]) => xs.filter((x, i) => xs.indexOf(x) === i);

export const _nub = (xs: any[]) => Array.from(new Set(xs));
