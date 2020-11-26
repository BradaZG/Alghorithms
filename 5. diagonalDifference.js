/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

Function description

Complete the function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers

Return

int: the absolute diagonal difference

Input Format

The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next  lines describes a row, arr[i], and consists of n space-separated integers arr[i][j]. */

function diagonalDifference(arr) {
  let ltr = 0; //left to right diagonal
  let rtl = 0; //right to left diagonal

  for (let i = 0; i < arr.length; i++) {
    ltr += arr[i][i];
    rtl += arr[i][arr.length - i - 1];
  }

  return Math.abs(ltr - rtl);
}
