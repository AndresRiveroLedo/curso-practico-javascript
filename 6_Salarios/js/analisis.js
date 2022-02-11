//Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(lista){
   
    const listaOrdenada = lista.sort(function(primerElemento, segundoELemento){
        return primerElemento - segundoELemento;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista]

        const mediana = calcularMediaAritmetica ([elemento1, elemento2,]);

        return mediana;


    }else{
        const mediana = listaOrdenada[mitadLista];
        return mediana;
    }
}

//Mediana General 
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10% --> 100 - 10 = 90
/*primer valor del metodo splice. Empezamos */
const spliceStart = parseInt((salariosColSorted.length * 90) / 100); 

/*Segundo valor del metodo splice. De la cantidad de persona que hay en el array
le restamos el 90% y asi nos quedamos con el 10% restante*/
const spliceCount = (salariosColSorted.length - spliceStart);

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);