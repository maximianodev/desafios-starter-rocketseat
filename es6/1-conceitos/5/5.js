const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...param) {
  return param.reduce((a, b) => a + b);
}

console.log(soma(1, 8, 5));

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil",
  },
};

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = { ...usuario, ...usuario.endereco, cidade: "Lontras"};
console.log(usuario2);
console.log(usuario3);
