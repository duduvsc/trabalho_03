// isAuthenticated.js

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next(); // O usuário está autenticado, permita o acesso à rota
    }
    res.status(401).json({ message: 'Acesso não autorizado.' }); // Usuário não autenticado
  };
  
  module.exports = isAuthenticated;
  