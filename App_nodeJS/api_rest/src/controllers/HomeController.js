import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Taís',
      sobrenome: 'Cotta de Mello',
      email: 'taismello@hotmail.com',
      idade: 45,
      peso: 57,
      altura: 1.60,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
