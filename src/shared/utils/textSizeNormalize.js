export const textSizeNormalize = name => {
  if (name.length <= 30) return name;
  const start = name.slice(0, 27);
  return `${start}...`;
};
