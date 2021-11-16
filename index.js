function sumDigPow(a, b) {
  eureka = [];
  for (i = a; i <= b; i++) {
    digits = String(i).split("");
    if (
      i ==
      digits.reduce(function (a, v, index) {
        return a + v ** (index + 1);
      }, 0)
    ) {
      eureka.push(i);
    }
  }
  return eureka;
}
console.log(sumDigPow(5, 155));
