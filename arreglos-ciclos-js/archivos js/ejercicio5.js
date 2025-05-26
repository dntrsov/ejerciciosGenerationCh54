/*For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/

/*
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log("people");
people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);
people.splice(people.indexOf("Luis"), 1); // Remove "Luis"
people.unshift("Luis"); // Add "Luis" to the front
people.push("Diana");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
}
console.log(people.indexOf("Maria"));
*/


export function ejecutarEjercicio5() {
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    let output = "";

    // 1. Print all the people in the list
    output += "1. Todos los nombres:\n" + people.join(', ') + "\n";

    // 2. Remove "Dani"
    const indexDani = people.indexOf("Dani");
    if (indexDani !== -1) people.splice(indexDani, 1);

    // 3. Remove "Juan"
    const indexJuan = people.indexOf("Juan");
    if (indexJuan !== -1) people.splice(indexJuan, 1);

    // 4. Move "Luis" to the front
    const indexLuis = people.indexOf("Luis");
    if (indexLuis !== -1) {
        const [luis] = people.splice(indexLuis, 1);
        people.unshift(luis);
    }

    // 5. Add my name "Diana"
    people.push("Diana");

    // 6. Loop and stop after Maria
    output += " Iterar hasta Maria:\n";
    for (let i = 0; i < people.length; i++) {
        output += people[i] + "\n";
        if (people[i] === "Maria") break;
    }

    // 7. Index of Maria
    const indexMaria = people.indexOf("Maria");
    output += `\nÍndice de Maria: ${indexMaria}\n`;

    // Final state
    output += `\nEstado final del array: ${people.join(', ')}\n`;
    output += `Cantidad de personas: ${people.length}`;

    return output;
}

