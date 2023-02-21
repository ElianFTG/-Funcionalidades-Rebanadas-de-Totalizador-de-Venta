import impuestosporEstado from "./impuestoXestado";
import multiplicar from "./multiplicacion";

const first = document.querySelector("#item");
const precioXitem = document.querySelector("#precio");
const estado = document.querySelector("#Estado");
const form = document.querySelector("#Impuesto-form");
const div = document.querySelector("#resultadoItems-div");
const div2 = document.querySelector("#resultadoPrecioXitem-div");
const div3 = document.querySelector("#EstadoElegido-div");
const div4 = document.querySelector("#PrecioNeto-div");
const div5 = document.querySelector("#ImpuestoXPN-div");

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
    const precioNeto = multiplicar(first.value, precioXitem.value);
    const Impuesto_estado = impuestosporEstado(estado.value);
    const impuestoTotal = multiplicar(precioNeto, Impuesto_estado);
    div4.innerHTML = "<p>" + "Precio Neto (" + first.value + "*" +"$" + precioXitem.value + "): " + "$" + precioNeto +"</p>";
    div5.innerHTML = "<p>" + "Impuesto para "+ estado.value + "(%" + Impuesto_estado*100 + "): " + "$" + impuestoTotal +"</p>";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
});