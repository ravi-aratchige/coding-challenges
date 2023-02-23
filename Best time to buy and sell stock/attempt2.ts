// PROBLEM:

// You are given an array prices where 'prices[i]' is the price of a given stock on the 'i'th day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// EXAMPLE:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function buyAndSellStock(prices: number[]): number {
    // initializing variables
    let profit: number = 0;
    let buyingPrice: number, sellingPrice: number, tempArray: number[], maximumValue: number = 0;
    // enter code here
    for (let i: number = 0; i < prices.length; i++) {
        buyingPrice = prices[0];
        console.log(`Buying price is ${buyingPrice}`);
        prices.shift();
        console.log(`Array after shifting is ${prices}`);
        maximumValue = getMax(prices);
        if ((maximumValue - buyingPrice) > profit) {
            profit = maximumValue - buyingPrice;
            console.log(`A profit of ${profit} has been made`);
        }
    }
    return profit;
}

function getMax(array: number[]): number {
    let maximum: number = 0;
    let tempArray: number[] = array;
    // enter code here
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            maximum = array[i];
        } // else maximum = array[i+1];
    }

    // tempArray.sort();
    // maximum = tempArray[(tempArray.length - 1)];


    console.log(`Maximum is ${maximum}`);
    return maximum;
}

console.log(buyAndSellStock([7,1,5,3,6,4]));
// console.log(buyAndSellStock([7,6,4,3,1]));

// ERROR:
console.log(buyAndSellStock([1,2]));
// expected output = 1
// output given = 0