function checarIdade(idade) {
  return new Promise(function (resolve, reject) {
    if (idade >= 18) {
      resolve(idade);
    } else {
      reject(idade);
    }
  });
}

checarIdade(20)
  .then(function () {
    console.log("Maior do que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
