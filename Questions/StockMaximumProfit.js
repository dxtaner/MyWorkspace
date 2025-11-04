// Stock Maximum Profit
function maxProfit(prices) {
  if (!prices || prices.length < 2) return -1;

  let minPrice = prices[0];
  let maxProfit = -1;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit > 0 ? maxProfit : -1;
}

// Step Counting Using Recursion
// Örnek kullanım
const prices = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(prices)); // 16
