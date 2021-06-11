export const chunksOf = (n: number) => (xs: any[]) =>
  xs.reduce(
    (acc, y, idx) =>
      idx % n === 0
        ? [...acc, [y]]
        : [...acc.slice(0, -1), [...acc.slice(-1)[0], y]],
    []
  );
