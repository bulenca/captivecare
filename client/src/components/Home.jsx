import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
	return (
		<>
			<div className='home-container'>
				<h1>Witaj w Prison C</h1>
				<p>Nasze więzienie jest tylko dla osób pełnoletnich</p>
				<Link to='/prisoners'>Sprawdź więźniów</Link>
			</div>
		</>
	)
}

export default Home
