export const textSizeNormalize = (name, maxNumOfChars) => {
  if (name.length <= maxNumOfChars) return name;
  const start = name.slice(0, maxNumOfChars / 2);
  const end = name.slice(name.length - maxNumOfChars / 2);
  return `${start}...${end}`;
};
