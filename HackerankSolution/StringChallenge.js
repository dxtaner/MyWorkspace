function StringChallenge(str) {
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  var varOcg = cleanStr.split("").reverse().join("");

  return cleanStr === varOcg ? "true" : "false";
}

// Test cases
console.log(StringChallenge("Noel - sees Leon")); // Output: true
console.log(StringChallenge("A war at Tarawa!")); // Output: true
