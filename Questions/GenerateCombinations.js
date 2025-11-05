function generateCombinations(str) {
  const result = [];

  function helper(current, index) {
    if (index === str.length) {
      result.push(current);
      return;
    }

    if (str[index] === "?") {
      // ? yerine 0 ve 1 koy
      helper(current + "0", index + 1);
      helper(current + "1", index + 1);
    } else {
      // Mevcut karakteri ekle
      helper(current + str[index], index + 1);
    }
  }

  helper("", 0);
  return result;
}

// Örnek kullanım
const input = "011?0??10";
console.log(generateCombinations(input));
