const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Adicione outros campos relevantes para as questões, como opções, respostas, etc.
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
