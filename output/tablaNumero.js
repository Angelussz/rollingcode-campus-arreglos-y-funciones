"use strict";
(() => {
    const soloNumeros = /^[0-9]+$/;
    const numero = prompt("Ingrese número");
    if (numero === null) {
        return;
    }
    if (soloNumeros.test(numero)) {
        const tablaDe = parseInt(numero);
        document.write("<ul>");
        for (let i = 1; i <= 10; i++) {
            document.write(`<li>${i} x ${numero} = ${i * tablaDe}</li>`);
        }
        document.write("</ul>");
    }
})();
