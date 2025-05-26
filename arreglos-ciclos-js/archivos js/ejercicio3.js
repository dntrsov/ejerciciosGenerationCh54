/*Write a program to compute the sum and product (multiplication) of an array of numbers. 
Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24*/


//-------- ejericio 3 ----------------------------------//
export function ejecutarEjercicio3() {
    const calcularSumaProducto = (ejemploArray) => {

        if (ejemploArray.length === 0) {
            return { suma: 0, producto: 1 }; 
        }
        const suma = ejemploArray.reduce((acc, num) => acc + num, 0);
        const producto = ejemploArray.reduce((acc, num) => acc * num, 1);
        return { suma, producto };
    };

    const numeros = [10, 20, 30, 40]; // Ejemplo de array
    const resultado = calcularSumaProducto(numeros);

    return `Arreglo: ${numeros.join(', ')}
            Suma : ${resultado.suma}
            Producto: ${resultado.producto}.`;
}



/*function calcular(array) {
    let suma = 0;
    let producto = 1;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
        producto *= array[i];
    }

    return {
        suma: suma,
        producto: producto
    };
}

const resultado = calcular([1, 2, 3,4]);
console.log("Suma:", resultado.suma);         // 
console.log("Multiplicación:", resultado.producto); // */



/*
function calcular(array) {
    const suma = array.reduce((sumproduct, num) => sumproduct + num, 0);
    const producto = array.reduce((sumproduct, num) => sumproduct * num, 1);
    return { suma, producto };
}*/




