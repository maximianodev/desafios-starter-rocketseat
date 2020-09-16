// import Usuario from "./functions"; // ----- Desafio 1.1 --------
// import { idade } from "./functions"; // ----- Desafio 1.2 --------

import Usuario, { idade as idadeUsuario } from "./functions"; // ----- Desafio 1.3 --------

// ----- Desafio 1.1 --------
class ClasseUsuario extends Usuario {
  constructor() {
    super();
  }
}
new ClasseUsuario.info();

// ----- Desafio 1.2 --------
document.querySelector("body").appendChild(document.createTextNode(idadeUsuario));
