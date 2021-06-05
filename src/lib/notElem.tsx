export const notElem = (x: any) => (xs: any[]) => xs.indexOf(x) === -1;

export const _notElem = (x: any) => (xs: any[]) => !xs.includes(x);
