function checkConsecutiveConsonants(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentChar = str[i];
    const nextChar = str[i + 1];

    if (!isVowel(currentChar) && !isVowel(nextChar)) {
      console.log(true);
      return;
    }
  }

  console.log(false);
}

function isVowel(char) {
  const vowels = "aeiouAEIOU";
  return vowels.includes(char);
}

// Örnek kullanım
checkConsecutiveConsonants("Merhaba Taner a"); // Output: True False True
