export const random = (min, max) => {
  if (typeof min !== "number" || typeof max !== "number") {
    return -1;
  }

  if (max === undefined) {
    max = min;
    min = 0;
  }
  console.log(min, max);

  return Math.floor(Math.random() * (max - min + 1)) + min || -1;
};
