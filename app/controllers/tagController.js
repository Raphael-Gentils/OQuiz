const { Tag } = require('../models');

const tagController = {
    async index(req, res) {
        const tags = await Tag.findAll({
            include: ['quizzes'],
        });
        res.render('themes', { tags: tags });
    },

};

module.exports = { tagController };