class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }
  
  isAdmin() {
    return this.admin === true
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario("teste@example.com", "12345");
const User2 = new Admin("teste@example.com", "12345");

console.log(User1.isAdmin());
console.log(User2.isAdmin());
