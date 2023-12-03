(()=>{
    const perimetroRectangulo = (a:number,b:number):number=>{
        return 2*(a+b);
    }
    const soloNumeros:RegExp = /^[0-9]+(\.[0-9]+)?$/;
    const ladoA:string|null= prompt("Ingrese lado A");
    const ladoB:string|null= prompt("Ingrese lado B");
    
    if(ladoA === null || ladoB === null){
        return;
    }
    if(!soloNumeros.test(ladoA) || !soloNumeros.test(ladoB)){
        return;
    }
    const ladoA_ = parseFloat(ladoA);
    const ladoB_ = parseFloat(ladoB);
    document.write(perimetroRectangulo(ladoA_,ladoB_).toString());
})()