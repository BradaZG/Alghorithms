/* Staircase detail

This is a staircase of size n = 4:

   #
  ##
 ###
####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer

Print

Print a staircase as described above. */

function staircase(n) {
  const space = ' ';
  const symb = '#';

  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + symb.repeat(i));
  }
}
