module.exports = {
  up: async (queryInterface) => {
    // bulkInsert(tableName, Columns)
    await queryInterface.bulkInsert('disciplinas', [
      {
        nome: 'artes',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'biologia',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'espanhol',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'filosofia',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'física',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'geografia',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'história',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'inglês',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'literatura',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'matemática',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'português',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'química',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'redação',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'sociologia',
        imagem: 'url_img',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    // bulkDelete(tableName, where)
    await queryInterface.bulkDelete('disciplinas', null, {});
  },
};
