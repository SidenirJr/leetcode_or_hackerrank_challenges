//Link: https://www.hackerrank.com/challenges/bon-appetit/problem

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill: number[], k: number, b: number): void {
    const soma = bill.reduce((acc, val, idx) => idx === k ? acc : acc + val, 0);
    const divide = soma / 2;
    
    if (b === divide) {
        console.log("Bon Appetit");
    } else {
        console.log(b - divide)
    }
}