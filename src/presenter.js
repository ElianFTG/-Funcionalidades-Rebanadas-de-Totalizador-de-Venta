import impuestosporEstado from "./impuestoXestado";
import multiplicar from "./multiplicacion";
import descuento from "./descuentos";

const first = document.querySelector("#item");
const precioXitem = document.querySelector("#precio");
const estado = document.querySelector("#Estado");
const form = document.querySelector("#Impuesto-form");
const div = document.querySelector("#resultadoItems-div");
const div2 = document.querySelector("#resultadoPrecioXitem-div");
const div3 = document.querySelector("#EstadoElegido-div");
const div4 = document.querySelector("#PrecioNeto-div");
const div5 = document.querySelector("#ImpuestoXPN-div");
const div6 = document.querySelector("#Descuento-div");
const div7 = document.querySelector("#PrecioTotal-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + "Items: " + firstNumber + "</p>";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    div2.innerHTML = "<p>" + "Precio por item: " + precioXitem.value + "</p>";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    div3.innerHTML = "<p>" + "Estado: " + estado.value + " Porcentaje de impuesto: " + impuestosporEstado(estado.value)*100+ "%" +"</p>";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    div3.innerHTML = "<p>" + "Estado: " + estado.value + " Porcentaje de impuesto: " + impuestosporEstado(estado.value)*100+ "%" +"</p>";
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const precioNeto = Number.parseFloat(multiplicar(first.value, precioXitem.value));
    const Impuesto_estado = Number.parseFloat(impuestosporEstado(estado.value));
    const impuestoTotal = Number.parseFloat((multiplicar(precioNeto, Impuesto_estado)));
    const descuentoImpuesto = Number.parseFloat(descuento(impuestoTotal));
    const descuentoImpuestoTotal = Number.parseFloat(multiplicar(descuentoImpuesto, impuestoTotal));
    const PrecioTotal = precioNeto + impuestoTotal - descuentoImpuestoTotal;
    console.log('asdas', precioNeto);
    console.log('asdas', impuestoTotal.toFixed(2));
    console.log('asdas', descuentoImpuestoTotal.toFixed(2));
    console.log('asdas', PrecioTotal);
    console.log('precioNeto', typeof precioNeto);
    console.log('impuestoTotal', typeof impuestoTotal.toFixed(2));
    console.log('descuentoImpuestoTota', typeof descuentoImpuestoTotal.toFixed(2));
    console.log('PrecioTotal', typeof PrecioTotal);
    div4.innerHTML = "<p>" + "Precio Neto (" + first.value + "*" +"$" + precioXitem.value + "): " + "$" + precioNeto +"</p>";
    div5.innerHTML = "<p>" + "Impuesto para "+ estado.value + "(%" + Impuesto_estado*100 + "): " + "$" + impuestoTotal +"</p>";
    div6.innerHTML = "<p>" + "Descuento (" + descuentoImpuesto.toFixed(2)*100 + "%): " + descuentoImpuestoTotal.toFixed(2) +"</p>";
    div7.innerHTML = "<p>" + "Precio total (descuento e impuesto): " + "$" + PrecioTotal.toFixed(2) +  "</p>";
});