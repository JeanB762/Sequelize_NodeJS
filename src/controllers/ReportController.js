import { Op } from 'sequelize';
import User from '../models/User';

export default {
  async show(req, res) {
    // Encontrar todos os usuarios que tem email que termina com @rocketseat.com.br
    // Desses usuarios eu quero buscar todos os que moram na rua "Rua Guilherme Gembala"
    // Desses usuarios eu quero buscar as tecnologias que começam com "React"

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@rocketseat.com.br',
        },
      },
      include: [
        {
          association: 'addresses',
          where: { street: 'Rua Guilherme Gembala' },
        },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%',
            },
          },
        },
      ],
    });
    return res.json(users);
  },
};
