// app.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();

// Configuração do MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB'));

// Configuração do Express.js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Defina seus modelos e estrutura de banco de dados em src/models/

// Defina suas rotas em src/routes/

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta ' + (process.env.PORT || 3000));
});
