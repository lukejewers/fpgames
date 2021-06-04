export const chunksOf = (x: number) => (xs: any[]) =>
  xs.reduce(
    (acc, y, idx) =>
      idx % x === 0
        ? [...acc, [y]]
        : [...acc.slice(0, -1), [...acc.slice(-1)[0], y]],
    []
  );
