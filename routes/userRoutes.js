const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// rota para registrar um novo usuário
router.post('/register', userController.registerUser);

// rota para login em userRoutes.js
router.post('/login', passport.authenticate('local'), userController.login);


router.post('/logout', userController.logout);



module.exports = router;
