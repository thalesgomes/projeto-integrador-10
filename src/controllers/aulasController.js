const { Aula, Topico } = require('../database/models');

const aulasController = {
  renderizarFormulario: (req, res) => {
    const { categoria } = req.session.usuario;
    const { id_disciplina, id_topico } = req.params;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) tem acesso ao formulário' });

    return res
      .status(200)
      .render('pages/form_aulas', { id_disciplina, id_topico });
  },

  cadastrar: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina, id_topico } = req.params;
    const { nome, url } = req.body;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) pode cadastrar aulas' });

    try {
      await Aula.create({
        id_professor,
        id_disciplina,
        id_topico,
        nome,
        url,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível cadastrar a aula. Verifique os dados enviados e tente novamente',
      });
    }

    return res
      .status(201)
      .redirect(`/disciplinas/${id_disciplina}/topicos/${id_topico}/aulas`);
  },

  listar: async (req, res) => {
    const { id, categoria } = req.session.usuario;
    const { id_disciplina, id_topico, id_professor } = req.params;

    if (categoria === 'estudante') {
      try {
        const topico = await Topico.findOne({
          where: {
            id_professor,
            id_disciplina,
            id: id_topico,
          },
          include: ['aulas'],
        });

        return res.status(200).render('pages/estudante_aulas', {
          id_professor,
          id_disciplina,
          id_topico,
          topico,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          erro: 'não foi possível listar as aulas. Tente novamente mais tarde',
        });
      }
    }

    if (categoria === 'professor') {
      try {
        const topico = await Topico.findOne({
          where: {
            id_professor: id,
            id_disciplina,
            id: id_topico,
          },
          include: ['aulas'],
        });

        return res.status(200).render('pages/professor_aulas', {
          id_disciplina,
          id_topico,
          topico,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          erro: 'não foi possível listar as aulas. Tente novamente mais tarde',
        });
      }
    }

    return res.status(500).json({ erro: 'algo inesperado ocorreu' });
  },

  renderizarFormEdicao: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina, id_topico, id_aula } = req.params;

    if (categoria === 'estudante')
      return res.status(401).json({
        erro: 'apenas professor(a) tem acesso ao formulário de edição',
      });

    try {
      const aula = await Aula.findOne({
        where: {
          id_professor,
          id_disciplina,
          id_topico,
          id: id_aula,
        },
      });

      return res.status(200).render('pages/form_aulas_edicao', {
        id_disciplina,
        id_professor,
        id_topico,
        id_aula,
        aula,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível renderizar o formulário de edição da aula',
      });
    }
  },

  editar: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina, id_topico, id_aula } = req.params;
    const { nome, url } = req.body;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) pode editar uma aula' });

    try {
      await Aula.update(
        {
          nome,
          url,
        },
        {
          where: {
            id_professor,
            id_disciplina,
            id_topico,
            id: id_aula,
          },
        },
      );

      return res
        .status(201)
        .redirect(`/disciplinas/${id_disciplina}/topicos/${id_topico}/aulas`);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível editar a aula. Verifique os dados enviados e tente novamente',
      });
    }
  },

  excluir: async (req, res) => {
    const { id: id_professor, categoria } = req.session.usuario;
    const { id_disciplina, id_topico, id_aula } = req.params;

    if (categoria === 'estudante')
      return res
        .status(401)
        .json({ erro: 'apenas professor(a) pode apagar uma aula' });

    try {
      await Aula.destroy({
        where: {
          id_professor,
          id_disciplina,
          id_topico,
          id: id_aula,
        },
      });

      return res
        .status(200)
        .redirect(`/disciplinas/${id_disciplina}/topicos/${id_topico}/aulas/`);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erro: 'não foi possível apagar a aula. Verifique os dados enviados e tente novamente',
      });
    }
  },
};

module.exports = aulasController;
