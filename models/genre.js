const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = mongoose.model('Genre',  mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxxlength: 50
    }
}));

const Genre = mongoose.model('Genre', genreSchema)

function validategenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    
    return schema.validate(genre);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validategenre;