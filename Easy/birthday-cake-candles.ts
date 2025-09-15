//link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles: number[]): number {
    const tallestCandle = Math.max(...candles);
    let tallestCandlesNumber = 0;
    
    candles.map((n) => {
        if (n == tallestCandle) {
            tallestCandlesNumber++
        }
    })
    
    return tallestCandlesNumber;
}
