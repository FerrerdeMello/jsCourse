const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
};

exports.register = async function(req, res) {
  try {
    const newLogin = new Login(req.body);
    await newLogin.register();

    if (newLogin.errors.length > 0) {
      // Guarda os erros no flash
      req.flash('errors', newLogin.errors);

      // Renderiza a tela de login novamente
      return res.render('login', {
        errors: newLogin.errors,  // passa os erros para a view
        body: req.body            // mantém os dados digitados no formulário
      });
    }

    // Se deu certo, redireciona (por exemplo para a home)
    req.flash('success', 'Usuário registrado com sucesso!');
    req.session.save(function() {
      return res.redirect('/');
    });

  } catch (e) {
    console.log(e);
    return res.render('404'); // fallback para erros inesperados
  }
};

