const Card = require('../models/Card');
const generateId = require('../utils/generateId');

exports.createCard = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const id = generateId();
        const newCard = await Card.create({ id, title, description });
        res.status(201).json(newCard);
    } catch (error) {
        next(error);
    }
};

exports.getAllCards = async (req, res, next) => {
    try {
        const cards = await Card.findAll();
        res.json(cards);
    } catch (error) {
        next(error);
    }
};

exports.getCardByTitle = async (req, res, next) => {
    console.log(req.params.title)
    try {
        const card = await Card.findOne({ where: { title: req.params.title } });
        if (card) {
            res.json(card);
        } else {
            res.status(404).json({ error: 'Card not found' });
        }
    } catch (error) {
        next(error);
    }
};
