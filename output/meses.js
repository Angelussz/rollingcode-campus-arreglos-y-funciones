"use strict";
(() => {
    const ej1MesesPantalla = () => {
        const meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        document.write("<h2>Lista de meses</h2>");
        let listaMeses = "<ul>";
        meses.forEach((mes) => {
            listaMeses += `<li>${mes}</li>\n`;
        });
        listaMeses += "</ul>";
        document.write(listaMeses);
    };
    ej1MesesPantalla();
    console.log("hoa");
})();
