var mongoose = require('mongoose');

const RegistrosSchema = new mongoose.Schema({

});

module.exports = mongoose.model('registros', RegistrosSchema, "registros");