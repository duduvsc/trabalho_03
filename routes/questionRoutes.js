const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Rota para cadastrar uma nova questão
router.post('/questions', questionController.createQuestion);
// Adicione esta rota em questionRoutes.js
router.post('/exams', examController.createExam);
// Exemplo de proteção de rota que requer autenticação
router.post('/create-question', isAuthenticated, questionController.createQuestion);



module.exports = router;
// Adicione outras rotas relacionadas a questões aqui, como listar questões, atualizar questões, etc.

module.exports = router;
