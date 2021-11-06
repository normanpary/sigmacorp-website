const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
	NAME: {
		type: String,
		trim: true,
		required: true,
	},
});
module.exports = mongoose.model('Tag', TagSchema);
