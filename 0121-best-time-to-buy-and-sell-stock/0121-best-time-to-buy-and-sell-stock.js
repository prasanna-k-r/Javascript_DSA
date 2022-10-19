/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2){
        return 0;
    }
    
    const profits = new Array(prices.length).fill(0);
    let lowest_before = prices[0];
    for (let i=1; i<prices.length; i++){
        let gain = 0;
        if (prices[i] - lowest_before > 0){
            gain = prices[i] - lowest_before;
        }else{
            gain = 0;
        }
        if (prices[i] < lowest_before){
            lowest_before = prices[i];
        }
        if (gain > profits[i-1]){
            profits[i] = gain;
        }else{
            profits[i] = profits[i-1];
        }
    }
    return profits[prices.length - 1];
};