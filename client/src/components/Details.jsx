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
				<table>
					<thead>
						<tr>
							<th scope='col'>Imie</th>
							<th scope='col'>Nazwisko</th>
							<th scope='col'>Wiek</th>
							<th scope='col'>Wyrok</th>
							<th scope='col'>Powód</th>
						</tr>
					</thead>
					<tbody>
						{prisonersList.map(prisoner => {
							return (
								<tr key={prisoner._id}>
									<td>{prisoner.name}</td>
									<td>{prisoner.surname}</td>
									<td>{prisoner.age}</td>
									<td>{prisoner.sentence} lat</td>
									<td>{prisoner.reason}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Details
