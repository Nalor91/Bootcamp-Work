const dogData = require('../models/Dogs');

const handleError = (err) => {
    console.log(err.message, err.code);
    let errors = {name: '', breed: '', age: '', description: ''};

    if (err.code === 11000) {
        errors.name = 'That dog is already registered';
    }

    if (err.message.includes('dog validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

module.exports.createDog = async (req, res) => {
    const {name, breed, age, image} = req.body;

    try {
        const dog = await dogData.create({name, breed, age, description});
        res.status(201).json({dog: dog._id});
    }
    catch (err) {
        const errors = handleError(err);
        res.status(400).json({errors});
    }
};

module.exports.getDogs = async (req, res) => {
    try {
        const dogs = await dogData.find({});
        res.status(200).json(dogs);
    }
    catch (err) {
        res.status(400).json({error: err.message});
    }
};