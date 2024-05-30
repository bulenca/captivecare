import axios from 'axios'
import { useState, useEffect } from 'react'

const ManageLogged = () => {
	const [prisonersList, setPrisonersList] = useState([])

	const [newPrisoner, setNewPrisoner] = useState({
		name: '',
		surname: '',
		age: 0,
		sentence: 0,
		reason: '',
	})

	const [isOpenAdd, setIsOpenAdd] = useState(true)

	const togglePopupAdd = () => setIsOpenAdd(!isOpenAdd)

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
			<div className='mainContainer'>
				<h1>Zarządzaj więźniami - panel admina</h1>
				<button onClick={togglePopupAdd} class='inputButton' style={{ fontSize: '18px', marginBottom: '25px' }}>
					Dodaj nowego więźnia
				</button>
			</div>

			<table>
				<thead>
					<tr>
						<th scope='col'>Imie</th>
						<th scope='col'>Nazwisko</th>
						<th scope='col'>Wiek</th>
						<th scope='col'>Wyrok</th>
						<th scope='col'>Powód</th>
						<th scope='col'>Edytuj</th>
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
								<td class='manage'>Zarządzaj</td>
							</tr>
						)
					})}
				</tbody>
			</table>

			{isOpenAdd && (
				<div className='popup'>
					<h2>Dodaj więźnia</h2>
					<label htmlFor='new-prisoner_name'>Imie:</label>
					<input id='new-prisoner_name' type='text' class='inputBox' style={{ width: '70%', height: '8%' }} />

					<label htmlFor='new-prisoner_surname'>Nazwisko:</label>
					<input id='new-prisoner_surname' type='text' class='inputBox' style={{ width: '70%', height: '8%' }} />

					<label htmlFor='new-prisoner_age'>Wiek:</label>
					<input id='new-prisoner_age' type='text' class='inputBox' style={{ width: '70%', height: '8%' }} />

					<label htmlFor='new-prisoner_sentence'>Wyrok (ile lat):</label>
					<input id='new-prisoner_sentence' type='text' class='inputBox' style={{ width: '70%', height: '8%' }} />

					<label htmlFor='new-prisoner_reason'>Powód:</label>
					<input id='new-prisoner_reason' type='text' class='inputBox' style={{ width: '70%', height: '8%' }} />

					<button onClick={togglePopupAdd}>Close</button>
				</div>
			)}
		</>
	)
}

export default ManageLogged
