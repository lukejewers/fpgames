export const tail = (xs: any[]) => xs.slice(-(xs.length - 1));

export const _tail = ([x, ...xs]: any[]) => xs;
