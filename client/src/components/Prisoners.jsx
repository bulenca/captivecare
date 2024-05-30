import axios from 'axios'
import { useState, useEffect } from 'react'

const Prisoners = () => {
	const [prisonersList, setPrisonersList] = useState([])

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
			<ul style={{ listStyle: 'none' }}>
				{prisonersList.map(prisoner => {
					return (
						<li key={prisoner._id}>
							imię: {prisoner.name}, nazwisko:{prisoner.surname}, wiek:{prisoner.age}
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default Prisoners
