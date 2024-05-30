const mongoose = require('mongoose')

const prisonerSchema = new mongoose.Schema({
	name: String,
	surname: String,
	age: Number,
	sentence: Number,
	reason: String,
})

const Prisoner = mongoose.model('prisoners', prisonerSchema)

module.exports = Prisoner
