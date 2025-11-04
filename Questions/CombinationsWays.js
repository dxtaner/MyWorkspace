function countWays(n) {
  if (n === 0) return 1; // Hiç basamak yok, 1 yol
  if (n < 0) return 0; // Geçersiz durum

  // 1 basamak ve 2 basamak seçeneklerini ekle
  return countWays(n - 1) + countWays(n - 2);
}

// String Combinations Consisting only of 0, 1 and ?
// Örnek kullanım
const steps = 4;
console.log(countWays(steps)); // 5
