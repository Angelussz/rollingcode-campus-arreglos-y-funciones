(() => {
  const EsMayuOMinus = (palabra: string): string => {
    let mayusMinus: [number, number] = [0, 0];
    for (let i = 0; i < palabra.length; i++) {
      if (palabra.charAt(i) === palabra.charAt(i).toUpperCase()) {
        mayusMinus[0] += 1;
      }
      if (palabra.charAt(i) === palabra.charAt(i).toLocaleLowerCase()) {
        mayusMinus[1] += 1;
      }

      if (mayusMinus[0] > 0 && mayusMinus[1] > 0) {
        break;
      }
    }

    if (mayusMinus[0] > 0 && mayusMinus[1] > 0) {
      return "Tiene mayusculas y minusculas";
    }
    if(mayusMinus[0]>0){
        return "Tiene solo Mayusculas";
    }
    if(mayusMinus[1]>0){
        return "Tiene solo Minusculas";
    }

    return "";
  };
  document.write(EsMayuOMinus("gggG"))
})();
