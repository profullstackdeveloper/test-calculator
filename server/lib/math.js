function sum(numbers) {
  let result = 0;
  result = numbers.reduce((total, pres) => total + pres, 0);
  return result;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

function stdev(numbers) {
  const averageResult = average(numbers);
  const result = numbers.reduce(
    (total, pres) => total + (pres - averageResult) * (pres - averageResult),
    0
  );
  return Math.sqrt(result / numbers.length);
}

module.exports = { sum, average, stdev };
