module.exports = (req, res) => {
  if (!req.session.professor && !req.session.estudante) res.redirect('/usuarios/login');
};
