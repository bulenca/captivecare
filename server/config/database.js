const mongoose = require('mongoose')

async function connectionToMongoDB(url) {
	try {
		await mongoose.connect(url)
		console.log('Connected to MongoDB')
	} catch (err) {
		console.log(`Connection error: ${err.message}`)
	}
}

module.exports = connectionToMongoDB
