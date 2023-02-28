function isPrime(n) {
  if (n < 2) return `${n} is not a prime number`;

  //math square root 
  let root = Math.ceil(Math.sqrt(n));

  //modulus %
  for (let i = 2; i <= root; i++) {
    if (n % i === 0) {
      return `${n} is not a prime number`;
    }
  }
  return `${n} is a prime number`;
}
console.log(isPrime(127));
