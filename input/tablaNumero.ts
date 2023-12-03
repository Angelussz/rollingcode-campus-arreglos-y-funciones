(() => {
  const soloNumeros: RegExp = /^[0-9]+$/;
  const numero: string | null = prompt("Ingrese número");
  if(numero===null){
    return
  }
  if(soloNumeros.test(numero)){
    const tablaDe:number = parseInt(numero);
    document.write("<ul>")
    for (let i = 1; i <= 10; i++) {
        document.write(`<li>${i} x ${numero} = ${i*tablaDe}</li>`)
    }
    document.write("</ul>")
  }
})();
