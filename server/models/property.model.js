const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Este es un campo requerido'],
        maxLength: [150, 'No debe excer los 150 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Este es un campo requerido'],
    },
    likes: {
        type: Number,
        default: 0
    },   
    isSold: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
        required: [true, 'Este es un campo requerido'],
    }
},
{timestamps: true}
);

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;