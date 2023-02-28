const main = (params) => {
  const primes = [];
  for (let i = 2; i <= 1000; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  let sum = primes.map((num) => num).reduce((total, num) => total + num);

  return sum;
};

console.log(main());
