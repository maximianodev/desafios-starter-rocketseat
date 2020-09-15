var habilidades = ["Javascript", "ReactJS", "React Native"];
const temHabilidade = (param, find) => {
  return param.indexOf(find) >= 0;
};
console.log(temHabilidade(habilidades, "Javascript"));
