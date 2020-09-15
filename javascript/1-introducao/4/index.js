function experiencia(anos) {
  // if(anos <= 1) {
  //   console.log("Iniciante")
  // }else if (anos <= 3) {
  //   console.log("Intermediário")
  // } else if (anos <= 6) {
  //   console.log("Avancado")
  // } else{
  //   console.log("Jedi Master")
  // }

  // Ou

  switch (true) {
    case anos == "":
      console.log("Erro, digite seus anos de experiência!");
      break;
    case anos <= 1:
      console.log("Iniciante");
      break;
    case anos <= 3:
      console.log("Intermediário");
      break;
    case anos <= 6:
      console.log("Avançado");
      break;
    default:
      console.log("Jedi Master");
      break;
  }
}

var anosEstudo = "6";
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master