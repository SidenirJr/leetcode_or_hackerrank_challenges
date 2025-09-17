//Link: https://www.hackerrank.com/challenges/grading/problem

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades: number[]): number[] {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5;
        }
        
        return grade;
    });
}