//Link: https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    const counts: Record<number, number> = {};

    ar.forEach(sock => {
        counts[sock] = (counts[sock] || 0) + 1;
    });

    return Object.values(counts)
        .reduce((pairs, count) => pairs + Math.floor(count / 2), 0);
}