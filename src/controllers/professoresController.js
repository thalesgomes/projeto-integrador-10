const { Professor } = require('../database/models');

const professoresController = {

  renderizarPerfilEdicao: async (req, res) => {
    const { usuario } = req.session;
    // const professor = await Professor.findOne({
    //   where: usuario.id,
    // });

    return res.render('usuarios_cadastro_editar', usuario.id);
  },

  editarPerfil: async (req, res) => {
    const { usuario } = req.session;

    const {
      nome, sobrenome, email, senha, categoria, disciplina,
    } = req.body;

    await Professor.update({
      nome,
      sobrenome,
      email,
      senha,
      categoria,
      disciplina,
      where: {
        id: usuario.id,
      },
    });

    return res.redirect('/dashboard');
  },
};

module.exports = professoresController;
