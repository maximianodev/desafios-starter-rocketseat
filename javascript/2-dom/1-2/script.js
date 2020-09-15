const buttonAddColor = document.querySelector("#addColor");
const appElement = document.querySelector("#box-container");

buttonAddColor.onclick = () => {
  const box = document.createElement("div");

  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "#fff";
  box.style.margin = "10px";

  appElement.appendChild(box);

// Segundo Desafio
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  box.onmouseover = () => {
    box.style.backgroundColor = getRandomColor();
  };
};