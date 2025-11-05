// Find All Duplicates in Array in Linear Time
function findDuplicates(nums) {
  const count = {};
  const duplicates = [];

  for (let num of nums) {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
  }

  for (let num in count) {
    if (count[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

// Örnek kullanım
const arr = [1, 2, 3, 3, 3, 0, 0, 4, 4, 5, 6, 6, 9];
console.log(findDuplicates(arr)); // [0, 3, 4, 6]
