//Link: https://www.hackerrank.com/challenges/apple-and-orange/problem

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    let applesFell = apples.map((apple) => a + apple)
    .filter(num => num >= s && num <= t).length
    
    let orangesFell = oranges.map((orange) => b + orange)
    .filter(num => num >= s && num <= t).length
    
    console.log(applesFell);
    console.log(orangesFell)
}