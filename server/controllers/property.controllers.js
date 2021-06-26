const Property = require('../models/property.model');

module.exports.findAllProperties = (req, res) => {
    Property.find()
    .then(allProperties => res.json({properties: allProperties}))
    .catch(err => res.json({error: err}));
}

module.exports.creatNewProperty = (req, res) => {
    Property.create(req.body)
    .then(newProperty => res.send({property: newProperty}))
    .catch(err => res.send({errors: err}));
}

module.exports.getOneSingleProperty = (req, res) => {
    Property.findOne({_id: req.params.id})
    .then(property => res.json({property: property}))
    .catch(err => res.status(404).json(err));
}

module.exports.updateProperty = (req, res) => {
    Property.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedProperty => res.json({property: updatedProperty}))
    .catch(err => res.status(404).json(err));
}

module.exports.deleteProperty = (req, res) => {
    Property.deleteOne({_id: req.params.id})
    .then(response => res.json({response: response}))
    .catch(err => res.json(err))
}