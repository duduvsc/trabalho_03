// Importe o modelo de Questão (Question) definido em models/Question.js
const Question = require('../models/Question');

// Função para cadastrar uma nova questão
exports.createQuestion = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Crie uma nova instância da questão usando o modelo Question
    const newQuestion = new Question({ title, description });

    // Salve a questão no banco de dados
    await newQuestion.save();

    // Responda com uma mensagem de sucesso
    res.status(201).json({ message: 'Questão cadastrada com sucesso.' });
  } catch (error) {
    // Em caso de erro, responda com uma mensagem de erro
    res.status(500).json({ error: 'Erro ao cadastrar a questão.' });
  }
};

// Você pode adicionar outras funções de controle relacionadas a questões aqui
