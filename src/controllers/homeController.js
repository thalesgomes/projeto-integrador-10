const homeController = {
  redirecionar: (req, res) => {
    return res.redirect('/dashboard');
  },
};

module.exports = homeController;
