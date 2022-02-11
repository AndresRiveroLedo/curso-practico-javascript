const lista1 = [
    100, 
    200, 
    500, 
    40000000,
];
let mediana;


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );
    
    const promedioLista = sumaLista / lista.length;    
    return promedioLista;
}


function esPar(numero){
    if(numero %2 === 0){
        return true;
    }else{
        return false;
    }
}


function calcularMediana(lista){

    const listaOrdenada = lista.sort(function(primerElemento, segundoELemento){
        return primerElemento - segundoELemento;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista]

        const promedioElemento1y2 = calcularMediaAritmetica ([elemento1, elemento2,]);

        mediana = promedioElemento1y2;

        return mediana;


    }else{
        mediana = listaOrdenada[mitadLista];
        return mediana;
    }

    

}

console.log(calcularMediana(lista1));