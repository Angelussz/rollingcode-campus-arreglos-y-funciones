(() => {
  let dado1: number;
  let dado2: number;
  let sumaDados: number[] = Array(13).fill(0);
  for (let i = 0; i < 50; i++) {
    dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    sumaDados[dado1+dado2] +=1; 
  }
  for (let i = 2; i <= 12; i++) {
    document.write(`<p>Suma ${i}: Apariciones ${sumaDados[i]}</p>`);
  }
  
})();
