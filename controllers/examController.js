// examController.js
const Exam = require('../models/Exam');

// Função para criar uma nova prova
exports.createExam = async (req, res) => {
  try {
    // Implemente a lógica para criar uma prova aqui
    // Certifique-se de que a prova tenha no mínimo 10 questões

    // Responda com uma mensagem de sucesso
    res.status(201).json({ message: 'Prova criada com sucesso.' });
  } catch (error) {
    // Em caso de erro, responda com uma mensagem de erro
    res.status(500).json({ error: 'Erro ao criar a prova.' });
  }
};
