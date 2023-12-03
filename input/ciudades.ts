(() => {
  /*
 const arr: string[] = [
    "Nueva York, Estados Unidos",
    "Barcelona, España",
    "Tokio, Japón",
    "Londres, Reino Unido",
    "Roma, Italia",
    "Pekín, China",
    "Río de Janeiro, Brasil",
    "Ámsterdam, Países Bajos",
    "Sídney, Australia",
    "El Cairo, Egipto",
  ];
  */
  const arr: string[] = [];
  const imprimirCiudades = (arr: string[]): void => {
    document.write(`<ul>`);
    arr.forEach((ciudad, index) => {
      if (index + 1 === arr.length) {
        document.write(`<li>Elemento ultima posición: ${ciudad}</li>`);
        return;
      }
      document.write(`<li>Elemento ${index + 1}er posición: ${ciudad}</li>`);
    });
    document.write("</ul>");
  };

  const imprimirCiudadesSeleccion = (arr: string[]): void => {
    document.write(`<ul>`);
    if (arr[0] !== undefined) {
      document.write(`<li>Elemento ultima posición: ${arr[0]}</li>`);
    }
    if (arr[2] !== undefined) {
      document.write(`<li>Elemento ultima posición: ${arr[2]}</li>`);
    }
    if (arr[arr.length - 1] !== undefined) {
      document.write(
        `<li>Elemento ultima posición: ${arr[arr.length - 1]}</li>`
      );
    }
    document.write("</ul>");
  };
  let ciudad: string | null;
  do {
    ciudad = prompt("Ingrese Ciudad");
    if(ciudad !== null){
        arr.push(ciudad)
    }
  } while (ciudad !== null);

  document.write(`<p>El arreglo de ciudades tiene ${arr.length} elementos</p>`);
  imprimirCiudadesSeleccion(arr);

  arr.push("Paris");
  document.write(`<p>Elemento ultima posición ${arr[arr.length - 1]}</p>`);
  if (arr.length === 1) {
    arr.push("Barcelona");
  } else {
    arr[1] = "Barcelona";
  }
  document.write("<h2>Arreglo Ciudades</h2>")
  imprimirCiudades(arr);
})();
