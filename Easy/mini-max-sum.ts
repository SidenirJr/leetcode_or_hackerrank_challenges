//Link: https://www.hackerrank.com/challenges/mini-max-sum/problem

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    const total = arr.reduce((a, v) => a + v, 0);
    const menorNumero = Math.min(...arr);
    const maiorNumero = Math.max(...arr);

    const menorSoma = total - maiorNumero;
    const maiorSoma = total - menorNumero;

    console.log(`${menorSoma} ${maiorSoma}`);
}
