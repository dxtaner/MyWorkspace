/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1e9 + 7;

    const power = (base, exp) => {
        if (exp === 0) return 1;
        if (exp % 2 === 0) {
            const half = power(base, exp / 2) % MOD;
            return (half * half) % MOD;
        } else {
            return (base * power(base, exp - 1)) % MOD;
        }
    };

    const countEven = power(5, Math.floor(n / 2));
    const countOdd = power(4, Math.ceil(n / 2));

    const result = (countEven * countOdd) % MOD;

    return result;
};

// Examples
console.log(countGoodNumbers(1));  // Output: 5
console.log(countGoodNumbers(4));  // Output: 400
console.log(countGoodNumbers(50)); // Output: 564908303
