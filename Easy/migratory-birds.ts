// link: https://www.hackerrank.com/challenges/migratory-birds/problem

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
    //Objeto com Chave = numero, valor = Qtd que aparece
    const arrReduce = arr.reduce((c: Record<number, number>, n: number) => {
    c[n] = (c[n] || 0) + 1
    return c
    }, {} as Record<number, number>)
    
    let maiorFrequencia = 0;
    let numApareceMais = 0;
    
    const entradas = Object.entries(arrReduce);
    
    for (const [id, freq] of entradas) {
        if (freq > maiorFrequencia) {
            maiorFrequencia = freq
            numApareceMais = parseInt(id)
        } else if (freq === maiorFrequencia && parseInt(id) < numApareceMais) {
            numApareceMais = parseInt(id)
        }
    }
    
    return numApareceMais
}