/*Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]*/

//---------Ejercio 6 ---------------------//

// ejercicio5.js
export function ejecutarEjercicio6() {
    const bubbleSort = (arr) => {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);

        return arr;
    };

    const myArray = [3, 6, 12, 5, 100, 1];
    const resultado = bubbleSort(myArray);

    return `Arreglo ordenado burbuja: ${resultado.join(', ')}`;
}


/*const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

let myArray = [3, 6, 12, 5, 100, 1];
console.log(bubbleSort(myArray));*/
