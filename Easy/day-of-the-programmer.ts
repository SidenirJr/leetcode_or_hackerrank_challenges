// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year: number): string {
    let isBissexto = false;
    let isSpecialYear = false;
    if (year < 1917) {
        isBissexto = (year % 4 === 0)        
    } else if (year === 1918) {
        isSpecialYear = true;
    } else {
        isBissexto = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    }

    let dia = 0
    
    if (isSpecialYear) {
        dia = 26
    } else {
        dia = isBissexto ? 12 : 13;
    }

    const dateTime = new Date(year, 8, dia);
    const mes = String(dateTime.getMonth() + 1).padStart(2, '0');
    const ano = dateTime.getFullYear();
    
    return `${dia}.${mes}.${ano}`
}