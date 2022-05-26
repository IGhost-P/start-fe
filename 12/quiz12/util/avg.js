export const avg = (...nums) => {
  if (Array.isArray(nums[0])) nums = nums[0];

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") sum += nums[i];
  }
  return (sum / nums.length).toFixed(1);
};
