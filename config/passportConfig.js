const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Importe o modelo de Usuário (User)

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // O campo no formulário de login que representa o e-mail
      passwordField: 'password', // O campo no formulário de login que representa a senha
    },
    async (email, password, done) => {
      try {
        // Verifique se o usuário com o e-mail fornecido existe
        const user = await User.findOne({ email });

        // Se o usuário não for encontrado, retorne uma mensagem de erro
        if (!user) {
          return done(null, false, { message: 'E-mail ou senha incorretos.' });
        }

        // Verifique se a senha fornecida corresponde à senha armazenada no banco de dados
        const passwordMatch = await bcrypt.compare(password, user.password);

        // Se a senha não corresponder, retorne uma mensagem de erro
        if (!passwordMatch) {
          return done(null, false, { message: 'E-mail ou senha incorretos.' });
        }

        // Se o e-mail e a senha corresponderem, retorne o usuário autenticado
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize o usuário para armazenar na sessão
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Desserialize o usuário para buscar informações da sessão
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
