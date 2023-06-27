export const textSizeNormalize = name => {
  if (name.length <= 40) return name;
  const start = name.slice(0, 38);
  return `${start}...`;
};
