//Copy the code below into your workspace:

/*let arr = ["This", "is", "a", "sentence."];
function printOutString() {
    console.log(arr.join(" "));
}
printOutString();*/
//Complete the function to print out the string: This is a sentence.

// ejercicio1.js

export function ejecutarEjercicio1() {
    let array = ["This", "is", "a", "sentence."];

    const unirFrase = (array) => {
        let frase = "";
        for (let palabra of array) {
            frase += palabra + " ";
        }
        return frase.trim(); // Elimina el espacio final
    };

    return unirFrase(array); // Llama la función y devuelve el resultado
}

   

    //console.log(unirFrase(array));


