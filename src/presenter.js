import impuestosporEstado from "./impuestoXestado";
import precioNeto from "./precioneto";

const first = document.querySelector("#item");
const precioXitem = document.querySelector("#precio");
const estado = document.querySelector("#Estado");
const form = document.querySelector("#Impuesto-form");
const div = document.querySelector("#resultadoItems-div");
const div2 = document.querySelector("#resultadoPrecioXitem-div");
const div3 = document.querySelector("#EstadoElegido-div");
const div4 = document.querySelector("#PrecioNeto-div");

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
  
    div4.innerHTML = "<p>" + "Precio Neto: " + precioNeto(first.value, precioXitem.value) +"</p>";
});