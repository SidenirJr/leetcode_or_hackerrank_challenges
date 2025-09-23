//Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    let max = scores[0];
    let min = scores[0];
    
    let breakedRecords = 0;
    let minRecords = 0;
        
    for (const score of scores.slice(1)) {

        if (score > max){
            max = score
            
            breakedRecords++;
        } else if (score < min) {
            min = score
            minRecords++;
        }
    }
    
    return [breakedRecords, minRecords];
}