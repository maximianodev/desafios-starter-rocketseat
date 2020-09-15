// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map((item) => console.log(item + 10));

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
const mostrarIdade2 = (usuario) => console.log(usuario.idade);
mostrarIdade2(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const showUser = (...param) => console.log(param);
showUser(nome, idade);

//3.4;
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());
