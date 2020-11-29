/* Sunny and Johnny like to pool their money and go to the ice cream parlor. Johnny never buys the same flavor that Sunny does. The only other rule they have is that they spend all of their money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

For example, they have m = 6 to spend and there are flavors costing cost = [1, 3, 4, 5, 6]. The two flavors costing 1 and 5 meet the criteria. Using 1-based indexing, they are at indices 1 and 4.

Function Description

Complete the icecreamParlor function in the editor below. It should return an array containing the indices of the prices of the two flavors they buy, sorted ascending.

icecreamParlor has the following parameter(s):

m: an integer denoting the amount of money they have to spend
cost: an integer array denoting the cost of each flavor of ice cream

Output Format

For each test case, print two space-separated integers denoting the indices of the two flavors purchased, in ascending order. */

function icecreamParlor(m, arr) {
  const filteredArr = arr.filter((num) => num < m);
  let x = 0;
  let y = 0;

  for (let i = 0; i < filteredArr.length - 1; i++) {
    if (x === 0) {
      for (let j = i + 1; j < filteredArr.length; j++) {
        if (filteredArr[i] + filteredArr[j] === m) {
          x = filteredArr[i];
          y = filteredArr[j];
        }
      }
    }
  }

  return [arr.indexOf(x) + 1, arr.indexOf(y, arr.indexOf(x) + 1) + 1];
}
