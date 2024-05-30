import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Prisoners from './components/Prisoners'

function App() {
	return (
		<>
			<BrowserRouter>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/prisoners'>Prisoners</Link>
						</li>
						<li>
							<Link to='/details'>Details</Link>
						</li>
						<li>
							<Link to='/manage'>Manage</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/prisoners' element={<Prisoners />} />
					{/* <Route path='/products' component={Products} /> */}
					{/* <Route path='/contact' component={Contact} /> */}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
