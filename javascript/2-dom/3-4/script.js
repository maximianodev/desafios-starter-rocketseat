const names = ["Lucas", "Stefani", "Nina"];

var ulElement = document.querySelector("ul");

for (name of names) {
  addItem(name);
}

function addItem(name) {
  var liElement = document.createElement("li");
  var textGenerated = document.createTextNode(name);

  liElement.appendChild(textGenerated);
  ulElement.appendChild(liElement);
}

// Quarto
const buttonElement = document.querySelector("#add");
const inputElement = document.querySelector("#name");

buttonElement.onclick = () => {
  addItem(inputElement.value);
  inputElement.value = "";
};