module.exports = (req, res, next) => {
  if (!req.session.professor && !req.session.estudante) {
    res.redirect('/usuarios/login');
  }
  next();
};
