const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Courses = new Schema({
	title: { type: String, maxLength: 255 },
	body: { type: String, maxLength: 255 },
	image: { type: String, maxLength: 255 },
	creatAt: { type: Date, default: Data.now },
	updateAt: { type: Date, default: Data.now }
});
