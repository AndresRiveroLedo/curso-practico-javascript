//Codigo del cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado+ " cm " );

function perimetroCuadrado(lado){
    return 4 * lado;
} 
    
//console.log("El perimetro del cuadrado: "+ perimetroCuadrado()+ " cm " );

function areaCuadrado(lado){

    return lado ** 2;

} 
//console.log("El area del cuadrado es: "+ areaCuadrado + " cm^2");

//Interactuamos con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const value = input.value; //nos permitira obtener el valor que los usuarios introduzcan en el input

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const value = input.value; //nos permitira obtener el valor que los usuarios introduzcan en el input

    const area = areaCuadrado(value);
    alert(area);
}
console.groupEnd();

//Codigo del triangulo
console.group("Triángulos")
//const ladoTriangulo1 = 5;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

/*console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + " cm, " 
    + ladoTriangulo2
    + " cm, " 
    + baseTriangulo
    + " cm" );*/

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es: "+ alturaTriangulo + " cm");

function perimetroTriangulo(lado1,lado2, base){ 
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triángulo es: "+ perimetroCuadrado + " cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularAlturaTrianguloIsosceles(lado1, lado2, base){

    if(lado1 === lado2){
        return Math.sqrt((lado1**2)-((base/2)**2));
    }else{
        console.log("El triangulo no es isosceles");
    }

} 


console.groupEnd();

//Codigo del circulo
console.group("Circulo");


function diametroCirculo(radio){ 
    return radio * 2;
} 


//Perimetro circulo
function circunferencia(radio){ 
    return diametroCirculo(radio) * Math.PI;
}


function areaCirculo(radio){
    return (radio**2) * Math.PI;
} 


console.groupEnd();






