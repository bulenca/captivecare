const express = require('express')
const router = express.Router()
const Prisoner = require('../models/Prisoner')

router.get('/', async (req, res) => {
	try {
		const prisoners = await Prisoner.find({})
		console.log(prisoners)
		res.json(prisoners)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

module.exports = router
