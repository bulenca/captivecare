const express = require('express')
const multer = require('multer')
const router = express.Router()
const Prisoner = require('../models/Prisoner')
const upload = multer()

router.get('/', async (req, res) => {
	try {
		const prisoners = await Prisoner.find({})
		console.log(prisoners)
		res.json(prisoners)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

router.post('/', upload.fields([]), async (req, res) => {
	try {
		if (
			req.body.name.trim() == '' ||
			req.body.surname.trim() == '' ||
			req.body.age < 18 ||
			req.body.sentence < 1 ||
			req.body.reason.trim() == ''
		) {
			res.json({ message: 'Wprowadzono nieprawidłowe dane.' })
			return
		}
		const newPrisoner = new Prisoner(req.body)
		await newPrisoner.save()
		res.status(201).json(newPrisoner)
	} catch (err) {
		console.log(`post error ${err.message}`)
		res.status(400).json(err)
	}
})

router.delete('/:id', async (req, res) => {
	const prisonerId = req.params.id
	try {
		const deletedPrisoner = await Prisoner.findByIdAndDelete(prisonerId)
		if (!deletedPrisoner) return res.status(404).json({ message: 'Prisoner not found' })
		res.json({ message: 'Prisoner deleted' })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

module.exports = router
