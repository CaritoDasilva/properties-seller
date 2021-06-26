const PropertyController = require('../controllers/property.controllers');

module.exports = app => {
    app.get('/api/properties', PropertyController.findAllProperties);
    app.put('/api/properties/update/:id', PropertyController.updateProperty);
    app.get('/api/properties/:id', PropertyController.getOneSingleProperty);
    app.post('/api/properties/new', PropertyController.creatNewProperty);
    app.delete('/api/properties/delete/:id', PropertyController.deleteProperty);
}
