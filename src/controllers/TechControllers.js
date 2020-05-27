import Tech from '../models/Tech';
import User from '../models/User';

export default {
  async index(req, res) {},

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const [tech] = await Tech.findOrCreate({
      where: { name },
    });
    // console.log(name);

    await user.addTech(tech);

    return res.json(tech);
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const tech = await Tech.findOne({
      where: { name },
    });

    if (!tech) {
      return res.status(400).json({ error: 'Tech not found' });
    }
    await user.removeTech(tech);

    return res.status(200).json({ message: 'Deleted!' });
  },
};
