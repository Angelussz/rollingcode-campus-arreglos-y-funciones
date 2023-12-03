"use strict";
(() => {
    const perimetroRectangulo = (a, b) => {
        return 2 * (a + b);
    };
    const soloNumeros = /^[0-9]+(\.[0-9]+)?$/;
    const ladoA = prompt("Ingrese lado A");
    const ladoB = prompt("Ingrese lado B");
    if (ladoA === null || ladoB === null) {
        return;
    }
    if (!soloNumeros.test(ladoA) || !soloNumeros.test(ladoB)) {
        return;
    }
    const ladoA_ = parseFloat(ladoA);
    const ladoB_ = parseFloat(ladoB);
    document.write(perimetroRectangulo(ladoA_, ladoB_).toString());
})();
