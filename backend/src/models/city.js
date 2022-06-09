/** @format */

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schemaCity = new Schema({
	name: {
		type: String,
		required: [true, 'Renseigner le nom de la ville'],
		unique: [true, 'Cette ville existe déjà dans la base de donneés'],
		trim: true,
	},
	infoGeoLoc: {
		type: [],
	},
});

module.exports = new mongoose.model('CITY', schemaCity);
