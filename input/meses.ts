(() => {
  const ej1MesesPantalla = (): void => {
    const meses: string[] = [
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
  let listaMeses:string = "<ul>";
  meses.forEach((mes):void=>{
    listaMeses+= `<li>${mes}</li>\n`;
  })
  listaMeses+="</ul>";
  document.write(listaMeses);
  };
  ej1MesesPantalla();
  console.log("hoa")
})();
