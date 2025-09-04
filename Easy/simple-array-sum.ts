// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar: number[]): number {
    let total = 0;
    
    for (let i = 0; ar.length > i; i++) {
       total += ar[i]; 
    }
    return total
}
