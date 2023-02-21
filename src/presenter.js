const first = document.querySelector("#item");

const form = document.querySelector("#Impuesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + "Items: " + firstNumber + "</p>";
});