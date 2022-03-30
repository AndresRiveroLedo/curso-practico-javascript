console.log("Descuentos y porcentajes");
/*const precioOriginal = 100;
const descuento = 15;



console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscont = document.getElementById("InputDiscount");
    const discontValue = inputDiscont.value; 

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discontValue);

    //Primera forma
    document.getElementById("ResultPrice").innerText = "Primera Forma: El precio con descuento es: "+precioConDescuento;

    /*Segunda forma
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "Segunda forma: El precio con descuento es: "+precioConDescuento;*/

}