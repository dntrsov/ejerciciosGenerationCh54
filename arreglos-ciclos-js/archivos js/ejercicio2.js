/*
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

//-------Forma 1 ejercicio 2 con .map---------------//
/*
let  duplicarNumero = (array) => array.map(num => num * 2);
 let array = [1, 2, 3, 4];
let resultado =duplicarNumero(array);
console.log(resultado); // [2, 4, 6, 8] */


//-------Forma 2 ejercicio 2 con for---------------//

/*let arr = [10, 25, 30, 40];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2; 
}

console.log(arr); */

//---------- ejercicio 2 ----------------------------
export function ejecutarEjercicio2() {
    const duplicarConMap = (ejemploArray) => ejemploArray.map(num => num * 2);
    const numerosOriginales = [10, 20, 30, 40, 50];
    const numerosDuplicados = duplicarConMap(numerosOriginales);

    return `Arreglo con elementos duplicados:${numerosDuplicados.join(', ')}`;
}
