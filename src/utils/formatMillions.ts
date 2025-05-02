export const formatMillions = (value: number): string => {
  if (value >= 1_000_000) {
    const millions = Math.floor(value / 100_000) / 10;
    return `$${String(millions)} Million`;
  }

  return `$${value.toLocaleString()}`;
};
