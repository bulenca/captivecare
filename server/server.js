const app = require('./app')
const mongoose = require('mongoose')

const PORT = 8000

app.listen(PORT, () => console.log(`Server express is running at ${PORT}`))

process.on('SIGINT', async () => {
	console.log('Closing MongoDB')
	try {
		await mongoose.disconnect()
		console.log('MongoDB connection closed')
	} catch (err) {
		console.log(`Closing MongoDB Error: ${err.message}`)
	} finally {
		process.exit()
	}
})


