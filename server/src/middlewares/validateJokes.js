module.exports = (req, res, next) => {
    const { cardId, userAnswer } = req.body;
    if (!cardId || !userAnswer) {
        return res.status(400).json({ message: 'cardId and userAnswer are required' });
    }
    next();
};
