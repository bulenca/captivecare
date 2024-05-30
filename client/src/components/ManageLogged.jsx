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

	async function submitHandler() {
		const formData = new FormData()
		formData.append('name', newPrisoner.name)
		formData.append('surname', newPrisoner.surname)
		formData.append('age', newPrisoner.age)
		formData.append('sentence', newPrisoner.sentence)
		formData.append('reason', newPrisoner.reason)

		try {
			const response = await axios.post('http://localhost:8000/api/prisoners', formData)

			if (!response.ok) {
				throw new Error(`Network response wasn't ok ${response.status}`)
			}

			const data = await response.json()
			setNewPrisoner({ name: '', surname: '', age: 0, sentence: 0, reason: '' })
		} catch (err) {
			console.error(`Error: ${err.message}`)
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
				<div className='popup popup-add'>
					<h2>Dodaj więźnia</h2>
					<label htmlFor='new-prisoner_name'>Imie:</label>
					<input
						id='new-prisoner_name'
						type='text'
						class='inputBox'
						style={{ width: '70%', height: '8%' }}
						value={newPrisoner.name}
						onChange={e => setNewPrisoner({ ...newPrisoner, name: e.target.value })}
					/>

					<label htmlFor='new-prisoner_surname'>Nazwisko:</label>
					<input
						id='new-prisoner_surname'
						type='text'
						class='inputBox'
						style={{ width: '70%', height: '8%' }}
						value={newPrisoner.surname}
						onChange={e => setNewPrisoner({ ...newPrisoner, surname: e.target.value })}
					/>

					<label htmlFor='new-prisoner_age'>Wiek:</label>
					<input
						id='new-prisoner_age'
						min='18'
						max='100'
						type='number'
						class='inputBox'
						style={{ width: '70%', height: '8%' }}
						value={newPrisoner.age}
						onChange={e => setNewPrisoner({ ...newPrisoner, age: e.target.value })}
					/>

					<label htmlFor='new-prisoner_sentence'>Wyrok (ile lat):</label>
					<input
						id='new-prisoner_sentence'
						min='1'
						type='number'
						class='inputBox'
						style={{ width: '70%', height: '8%' }}
						value={newPrisoner.sentence}
						onChange={e => setNewPrisoner({ ...newPrisoner, sentence: e.target.value })}
					/>

					<label htmlFor='new-prisoner_reason'>Powód:</label>
					<input
						id='new-prisoner_reason'
						type='text'
						class='inputBox'
						style={{ width: '70%', height: '8%' }}
						value={newPrisoner.reason}
						onChange={e => setNewPrisoner({ ...newPrisoner, reason: e.target.value })}
					/>

					<div className='buttons'>
						<button
							class='inputButton'
							onClick={() => {
								togglePopupAdd()
								submitHandler()
							}}>
							Dodaj
						</button>
						<button class='inputButton' onClick={togglePopupAdd}>
							Zamknij
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ManageLogged