// Dutch National Flag Sorting Problem
function dutchNationalFlagSort(arr) {
  let low = 0; // 0’ların sınırı
  let mid = 0; // şu an işlenen eleman
  let high = arr.length - 1; // 2’lerin sınırı

  while (mid <= high) {
    if (arr[mid] === 0) {
      // 0'ı başa gönder
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      // 1 ise yerinde bırak
      mid++;
    } else if (arr[mid] === 2) {
      // 2'yi sona gönder
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

// Generate Primes Up To N Using Sieve of Eratosthenes Algorithm
// Örnek kullanım
const arraray = [2, 0, 0, 1, 2, 1];
console.log(dutchNationalFlagSort(arraray)); // [0, 0, 1, 1, 2, 2]
