function sieve(n) {
  const primes = Array(n + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= n; i++)
    if (primes[i]) for (let j = i * i; j <= n; j += i) primes[j] = false;

  return primes.reduce((arr, val, idx) => (val ? [...arr, idx] : arr), []);
}

// Örnek
console.log(sieve(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
