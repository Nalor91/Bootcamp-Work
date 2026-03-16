const dogData = require('../models/Dogs');

module.exports.list_get = async (req, res) => {
    res.render('listed');
}

module.exports.register_get = async (req, res) => {
    res.render('register');
    }

module.exports.register_post = async (req, res) => {
    const {name, breed, age, description} = req.body;
    try {
        const dog = await dogData.create({name, breed, age, description});
        res.status(201).json({dog: dog._id});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports.deleteDog = async (req, res) => {
    const {id} = req.params;
    try {
        await dogData.findByIdAndDelete(id);
        res.status(200).json({message: 'Dog deleted successfully'});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};