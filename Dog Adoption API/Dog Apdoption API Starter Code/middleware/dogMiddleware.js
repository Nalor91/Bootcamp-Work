const Dog = require('../models/Dogs');

const checkDog = async (req, res, next) => {
    const {id} = req.params;
    try {
        const dog = await Dog.findById(id);
        if (!dog) {
            return res.status(404).json({error: 'Dog not found'});
        }
        req.dog = dog;
        next();
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {checkDog};