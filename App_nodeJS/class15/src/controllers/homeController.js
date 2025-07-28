exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};
// comment to test
exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
