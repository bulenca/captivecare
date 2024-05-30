import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

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
							<Link to='/about'>Prisoners</Link>
						</li>
						<li>
							<Link to='/products'>Details</Link>
						</li>
						<li>
							<Link to='/contact'>Manage</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route exact path='/' element={<Home />} />
					{/* <Route path='/about' component={About} /> */}
					{/* <Route path='/products' component={Products} /> */}
					{/* <Route path='/contact' component={Contact} /> */}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
