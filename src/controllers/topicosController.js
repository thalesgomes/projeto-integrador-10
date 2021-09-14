const {
  Disciplina,
  Estudante,
  Topico,
  Aula,
} = require('../database/models/index');

const topicosController = {
  renderizarFormulario: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina } = req.params;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) tem acesso ao formulário' });

    try {
      const { topicos } = await Disciplina.findByPk(id_disciplina, {
        include: { association: 'topicos' },
      });

      const erros = [];

      return res.status(200).render('pages/form_topicos', {
        id_professor,
        id_disciplina,
        topicos,
        erros,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ erro: 'não foi possível carregar a página de formulário' });
    }
  },

  cadastrar: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina } = req.params;
    const { nome } = req.body;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) pode cadastrar um tópico' });

    const erros = [];

    if (nome === '' || nome === ' ') {
      erros.push('título do tópico não pode estar vazio');
    }

    if (erros.length > 0) {
      return res.status(400).render('pages/form_topicos', {
        id_professor,
        id_disciplina,
        erros,
      });
    }

    try {
      const topico = await Topico.create({
        id_professor,
        id_disciplina,
        nome,
      });

      // const id_topico = topico.id;

      return res
        .status(201)
        .redirect(
          `/disciplinas/${id_disciplina}/topicos/${topico.id}/aulas/form`,
        );
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível cadastrar o tópico. Verifique os dados e tente novamente',
      });
    }
  },

  listar: async (req, res) => {
    const { id, categoria } = req.session.usuario;
    const { id_disciplina, id_professor } = req.params;

    if (categoria === 'professor') {
      try {
        const topicos = await Topico.findAll({
          where: {
            id_professor: id,
            id_disciplina,
          },
          // order: [[{ model: Aula, as: 'aulas' }, 'id', 'ASC']],
          include: {
            model: Aula,
            as: 'aulas',
            // order: [['id', 'ASC']],
            include: ['arquivos'],
          },
        });

        const disciplina = await Disciplina.findByPk(id_disciplina);

        return res.status(200).render('pages/professor_topicos', {
          id_disciplina,
          disciplina,
          topicos,
          id,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          erro: 'não foi possível carregar os tópicos. Tente novamente mais tarde',
        });
      }
    }

    if (categoria === 'estudante') {
      try {
        const topicos = await Topico.findAll({
          where: {
            id_professor,
            id_disciplina,
          },
          // order: [[{ model: Aula, as: 'aulas' }, 'id', 'DESC']],
          include: {
            model: Aula,
            as: 'aulas',
          },
        });

        const { disciplinas } = await Estudante.findOne({
          where: { id },
          include: ['disciplinas'],
        });

        const disciplinasCadastradas = disciplinas;

        return res.status(200).render('pages/estudante_topicos', {
          id_professor,
          id_disciplina,
          disciplinasCadastradas,
          topicos,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          erro: 'não foi possível carregar os tópicos. Tente novamente mais tarde',
        });
      }
    }

    return res.status(500).json({ erro: 'algo inesperado ocorreu' });
  },

  renderizarFormEdicao: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina, id_topico } = req.params;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) tem acesso ao formulário' });

    try {
      const topico = await Topico.findOne({
        where: {
          id_professor,
          id_disciplina,
          id: id_topico,
        },
      });

      const erros = [];

      return res.status(200).render('pages/form_topicos_edicao', {
        id_professor,
        id_disciplina,
        id_topico,
        topico,
        erros,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível renderizar o formulário de edição do tópico',
      });
    }
  },

  editar: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina, id_topico } = req.params;
    const { nome } = req.body;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) pode editar um tópico' });

    try {
      const topico = await Topico.findOne({
        where: {
          id_professor,
          id_disciplina,
          id: id_topico,
        },
      });

      const erros = [];

      if (nome === '' || nome === ' ') {
        erros.push('título do tópico não pode estar vazio');
      }

      if (erros.length > 0) {
        return res.status(400).render('pages/form_topicos_edicao', {
          id_professor,
          id_disciplina,
          id_topico,
          topico,
          erros,
        });
      }

      await Topico.update(
        { nome },
        {
          where: {
            id_professor,
            id_disciplina,
            id: id_topico,
          },
        },
      );

      return res.status(201).redirect(`/disciplinas/${id_disciplina}/topicos`);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível editar o tópico. Verifique os dados enviados e tente novamente',
      });
    }
  },

  excluir: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina, id_topico } = req.params;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) pode apagar um tópico' });

    try {
      const aulas = await Aula.findAll({
        where: {
          id_professor,
          id_disciplina,
          id_topico,
        },
      });

      aulas.forEach((aula) => {
        Aula.destroy({
          where: {
            id_professor,
            id_disciplina,
            id_topico,
            id: aula.id,
          },
        });
      });

      await Topico.destroy({
        where: {
          id_professor,
          id_disciplina,
          id: id_topico,
        },
        include: ['aulas'],
      });

      return res.status(200).redirect(`/disciplinas/${id_disciplina}/topicos/`);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível apagar o tópico. Tente novamente mais tarde',
      });
    }
  },
};

module.exports = topicosController;
