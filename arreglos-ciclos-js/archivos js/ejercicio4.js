/*let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

// ----------------------Ejericio  ---------------//
// ejercicio4.js
export function ejecutarEjercicio4() {
    const student1Courses = ['Math', 'English', 'Programming', 'History'];
    const student2Courses = ['Geography', 'Spanish', 'Programming', 'Art'];

    const commonCourses = student1Courses.filter(course =>
        student2Courses.includes(course)
    );

    let resultadoString = `Cursos Estudiante 1: ${student1Courses.join(', ')}<br>Cursos Estudiante 2: ${student2Courses.join(', ')}`;

    if (commonCourses.length > 0) {
        resultadoString += `<br>Cursos en común: ${commonCourses.join(', ')}`;
    } else {
        resultadoString += `<br>No se encontraron cursos en común.`;
    }

    return resultadoString;
}












/*let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = student1Courses.filter(courses => student2Courses.includes(courses));
console.log(commonCourses);
console.log(commonCourses.length > 0);


// ----Opcion 2 Cursos en comun ----//

let hasCommonCourses = false;
let commonCourse = null;

for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] === student2Courses[j]) {
            hasCommonCourses = true;
            commonCourse = student1Courses[i];
            break;
        }
    }
    if (hasCommonCourses) break;
}

console.log("¿Tienen cursos en común?", hasCommonCourses); //True
if (commonCourse) {
    console.log("Curso en común:", commonCourse); // Programming
}*/
