//Link: https://www.hackerrank.com/challenges/plus-minus/problem

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    let positivos = 0;
    let negativos = 0;
    let zeros = 0;
    let n = arr.length;
    
    arr.forEach(num => {
        if (num > 0) positivos++;
        else if (num < 0) negativos++;
        else zeros++;
    });

    console.log(positivos / n);
    console.log(negativos / n);
    console.log(zeros / n)
}
