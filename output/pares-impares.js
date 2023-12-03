"use strict";
(() => {
    const parImpar = (numero) => {
        if (numero % 2 === 0) {
            return `El número ${numero} es par`;
        }
        else {
            return `El número ${numero} es impar`;
        }
    };
    document.write(parImpar(100));
})();
