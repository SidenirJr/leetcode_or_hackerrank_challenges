//link: https://www.hackerrank.com/challenges/between-two-sets/problem

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a: number[], b: number[]): number {
    // Calcula o mdc e mmc para encontrar os números entre os dois conjuntos
    function mdc(x: number, y: number) {
        while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
        }
        return x;
    }

    function mmc(x: number, y: number) {
        return (x * y) / mdc(x, y);
    }

    let mmcA = a.reduce((acc, num) => mmc(acc, num));

    let mdcB = b.reduce((acc, num) => mdc(acc, num));

    let count = 0;
    for (let x = mmcA; x <= mdcB; x += mmcA) {
        if (mdcB % x === 0) {
        count++;
        }
    }

    return count;

}