import axios from 'axios'
import { useState, useEffect } from 'react'

const Details = () => {
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
			<div class='prisoners-container'>
				<h1>Lista więźniów</h1>
				<ul style={{ listStyle: 'none' }}>
					{prisonersList.map(prisoner => {
						return (
							<li key={prisoner._id}>
								{prisoner.name} {prisoner.surname}, Wiek: {prisoner.age} lat/a
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default Details
