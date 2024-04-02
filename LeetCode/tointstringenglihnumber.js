/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) {
        return "Zero";
    }

    const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const toWords = (num) => {
        let result = "";

        if (num >= 100) {
            result += belowTwenty[Math.floor(num / 100)] + " Hundred ";
            num %= 100;
        }

        if (num >= 20) {
            result += tens[Math.floor(num / 10)] + " ";
            num %= 10;
        }

        if (num > 0) {
            result += belowTwenty[num] + " ";
        }

        return result;
    };

    const billion = Math.floor(num / 1000000000);
    const million = Math.floor((num % 1000000000) / 1000000);
    const thousand = Math.floor((num % 1000000) / 1000);
    const remainder = num % 1000;

    let result = "";

    if (billion > 0) {
        result += toWords(billion) + "Billion ";
    }

    if (million > 0) {
        result += toWords(million) + "Million ";
    }

    if (thousand > 0) {
        result += toWords(thousand) + "Thousand ";
    }

    if (remainder > 0) {
        result += toWords(remainder);
    }

    return result.trim();
};

// Example usage:
console.log(numberToWords(123));       // Output: "One Hundred Twenty Three"
console.log(numberToWords(12345));     // Output: "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567));   // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
