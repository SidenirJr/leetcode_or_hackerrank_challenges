// link: https://www.hackerrank.com/challenges/the-birthday-bar/problem

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s: number[], d: number, m: number): number {
    let count = 0;

    for (let i = 0; i <= s.length - m; i++) {
        const segment = s.slice(i, i + m);
        const sum = segment.reduce((acc, val) => acc + val, 0);
        if (sum === d) {
            count++;
        }
    }

    return count;
}
