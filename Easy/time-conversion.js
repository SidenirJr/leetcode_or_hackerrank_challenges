//Link: https://www.hackerrank.com/challenges/time-conversion/problem
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let periodo = s.slice(-2);
    let [hora, minuto, segundo] = s.slice(0, -2).split(":");

    hora = parseInt(hora, 10);

    if (periodo === "AM") {
        if (hora === 12) hora = 0;
    } else {
        if (hora !== 12) hora += 12;
    }

    let hora24h = String(hora).padStart(2, "0");

    return `${hora24h}:${minuto}:${segundo}`;
}
