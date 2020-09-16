import axios from "axios";

const getUserFromGithub = async (user) => {
  try {
    let response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  } catch (err) {
    alert("Usuário não existe!");
  }
};
getUserFromGithub("sr-max");

class GitHub {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response);
    } catch {
      console.log("Não encontrado!");
    }
  }
}
GitHub.getRepositories("sr-max/to-do");

const buscaUsuario = async (usuario) => {
  const response = await axios.get(`https://api.github.com/users/${usuario}`);
  console.log(response);
};
buscaUsuario("sr-max");
