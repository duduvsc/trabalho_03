// Importe o modelo de Usuário (User) definido em models/User.js
const User = require('../models/User');

// Função para registrar um novo usuário
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verifique se o e-mail já está em uso
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Este e-mail já está em uso.' });
    }

    // Crie uma nova instância do usuário usando o modelo User
    const newUser = new User({ username, email, password });

    // Hash da senha antes de salvar no banco de dados (você pode usar bcrypt)
    // newUser.password = await bcrypt.hash(password, 10);

    // Salve o novo usuário no banco de dados
    await newUser.save();

    // Responda com uma mensagem de sucesso
    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    // Em caso de erro, responda com uma mensagem de erro
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar o usuário.' });
  }
};

// userController.js
exports.login = (req, res) => {
    // Responda com uma mensagem de sucesso ou redirecione o usuário após o login
    res.status(200).json({ message: 'Login bem-sucedido.' });
  };

// userController.js
exports.logout = (req, res) => {
    req.logout(); // Logout do usuário
    res.status(200).json({ message: 'Logout bem-sucedido.' });
  };
  
// Você pode adicionar outras funções de controle relacionadas a usuários aqui
