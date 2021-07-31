module.exports = (req, res, next) => {
  if (!req.session.professor && !req.session.estudante) {
    return res.redirect('/usuarios/login');
  }
  return next();
};
