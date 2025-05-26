// Todas las importaciones van AL INICIO del archivo
import { ejecutarEjercicio1 } from './ejercicio1.js';
import { ejecutarEjercicio2 } from './ejercicio2.js';
import { ejecutarEjercicio3 } from './ejercicio3.js';
import { ejecutarEjercicio4 } from './ejercicio4.js';
import { ejecutarEjercicio5 } from './ejercicio5.js';
import { ejecutarEjercicio6 } from './ejercicio6.js';

document.addEventListener("DOMContentLoaded", () => {
    // Ejercicio 1
    const btn1 = document.getElementById("btn-ej1");
    const res1 = document.getElementById("resultado-ej1");
    if (btn1 && res1) {
        btn1.addEventListener("click", () => {
            res1.textContent = ejecutarEjercicio1();
        });
    }

    // Ejercicio 2
    const btn2 = document.getElementById("btn-ej2");
    const res2 = document.getElementById("resultado-ej2");
    if (btn2 && res2) {
        btn2.addEventListener("click", () => {
            res2.textContent = ejecutarEjercicio2();
        });
    }

    // Ejercicio 3
    const btn3 = document.getElementById("btn-ej3");
    const res3 = document.getElementById("resultado-ej3");
    if (btn3 && res3) {
        btn3.addEventListener("click", () => {
            res3.textContent = ejecutarEjercicio3();
        });
    }

    // Ejercicio 4
    const btn4 = document.getElementById("btn-ej4");
    const res4 = document.getElementById("resultado-ej4");
    if (btn4 && res4) {
        btn4.addEventListener("click", () => {
            res4.innerHTML = ejecutarEjercicio4();
        });
    }

    // ✅ Ejercicio 5
    const btn5 = document.getElementById("btn-ej5");
    const res5 = document.getElementById("resultado-ej5");
    if (btn5 && res5) {
        btn5.addEventListener("click", () => {
            res5.textContent = ejecutarEjercicio5();
        });
    }

    // Ejercicio 6
    const btn6 = document.getElementById("btn-ej6");
    const res6 = document.getElementById("resultado-ej6");
    if (btn6 && res6) {
        btn6.addEventListener("click", () => {
            res6.innerHTML = ejecutarEjercicio6();
        });
    }
});
