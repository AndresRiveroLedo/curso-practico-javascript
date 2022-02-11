const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];

  const lista1Count = {};

  /*El metodo metodo map() nos ayuda a recorrer la array */
  lista1.map(
    function (elemento){
        
        if(lista1Count[elemento]){
            lista1Count[elemento] +=1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
  );
/*el metodo Object.entries() le ponemos como argumento el objeto que queremos convertir en un array. El metodo sort para iterar y buscar la el valor más grande en lista1Count */
  const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB){/*Esta funcion recibe dos parametros en este caso dos array*/
            return elementoA[1] - elementoB[1]; /*Cuando elementoA[] sea mayor elementoB[] (resulatado positivo). El [1] hace referencia al segundo elemento del array que es el numero de repeticiones totales de un valor. [0] viene siendo el valor.
            PD: elementoA y elementoB son arrays. 
            */

            /*  funcion sort() como funciona:
                elementoA > elementoB return 1; 
                elementoA == elementoB return 0;
                elementoA < elementoB return -1; 
            */
        }

  );

  /*La moda siempre va a hacer el ultimo elemento de una array organizada. */
  const moda = lista1Array[lista1Array.length-1];
  
  console.log('el objeto es' ,lista1Array);//Necesitamos un for para recorrer la lista
  console.log();
  console.log('la moda es', moda);