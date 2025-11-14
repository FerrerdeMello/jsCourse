const Login = require('../models/loginModel');

exports.index = (req, res) => {

  console.log(req.session.user);

  if (req.session.user) return res.render('login-connected');
  
  return res.render('login', {
    errors: req.flash('errors'),   // pega do flash
    success: req.flash('success'), // pega do flash
    body: {}
  });
};

exports.register = async function (req, res) {
  try {
    const newLogin = new Login(req.body);
    await newLogin.register();

    if (newLogin.errors.length > 0) {
      req.flash('errors', newLogin.errors);
      return req.session.save(() => {
        res.render('login', {
          errors: req.flash('errors'),
          success: [],          // garante que success não apareça
          body: req.body
        });
      });
    }
    // IF SUCCESS
    req.flash('success', 'Registration completed successfully!');
    return req.session.save(() => {
      res.render('login', {
        errors: [],            // garante que erros não apareçam
        success: req.flash('success'),
        body: {}
      });
    });
  } catch (e) {
    console.log(e);
    return res.render('404'); // fallback para erros inesperados
  }
};

exports.signIn = async function (req, res) {
  try {
    const newLogin = new Login(req.body);
    await newLogin.signIn();

    if (newLogin.errors.length > 0) {
      req.flash('errors', newLogin.errors);
      return req.session.save(() => {
        res.render('login', {
          errors: req.flash('errors'),
          success: [],          // garante que success não apareça
          body: req.body
        });
      });
    }
    // IF SUCCESS
    req.flash('success', 'You have entered in the system.');
    req.session.user = newLogin.user;
    console.log('user to save in session:', newLogin.user);
console.log('req.session before save:', req.session);
    req.session.save(function() {
      return res.redirect('/login/index');
    });
  } catch (e) {
    console.log(e);
    return res.render('404'); // fallback para erros inesperados
  }
};

exports.signOut = function(req, res) {
  req.session.destroy();
  res.redirect('/');
}