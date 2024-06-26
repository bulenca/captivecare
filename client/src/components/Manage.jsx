import axios from 'axios'
import { useState, useEffect } from 'react'
import Login from './Login'
import ManageLogged from './ManageLogged'

let isLogged = false

const Manage = () => {
	const [prisonersList, setPrisonersList] = useState([])
	const [isLogged, setIsLogged] = useState(false)

	function logIn(e) {
		const loginContainer = e.target.parentNode.parentNode
		const loginInput = loginContainer.querySelectorAll('.inputBox')[0]
		const passInput = loginContainer.querySelectorAll('.inputBox')[1]

		if (loginInput.value === 'admin' && passInput.value === 'admin') {
			setIsLogged(true)
		} else {
			alert('Wprowadzono nieprawidłowe dane logowania! Spróbuj ponownie...')
		}
	}

	async function getPrisonersList() {
		try {
			const response = await axios.get(`http://localhost:8000/api/prisoners`)
			setPrisonersList(response.data)
		} catch (err) {
			console.log(`Error: ${err}`)
		}
	}

	useEffect(() => {
		getPrisonersList()
	}, [])

	return (
		<>
			<div class='prisoners-container'>
				{!isLogged && <Login onLogin={logIn} />}
				{isLogged && <ManageLogged />}
			</div>
		</>
	)
}

export default Manage
