/** @format */

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schemaMobile = new Schema({
	name: {
		type: String,
		required: [true, 'Renseigner le nom du mobile'],
		unique: [true, 'Ce mobile existe déjà dans la base de donneés'],
		trim: true,
	},
	infoGeoLoc: {
		type: [],
	},
});

module.exports = new mongoose.model('MOBILE', schemaMobile);
