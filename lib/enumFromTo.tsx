export const enumFromTo = (m: number) => (n: number) =>
  Array.from({ length: Math.floor(n - m) + 1 }, (_, i) => m + i);
