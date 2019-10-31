function arraySum(a, num) {
  let sum = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] > num) {
      sum = sum + a[i];
    }
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5], 3));

module.exports = arraySum;
