import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import { Analytics } from '@vercel/analytics/react'

import About from './pages/AboutPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Work from './pages/Work'
import Contact from './pages/Contact'
import BackgroundLines from './components/icons/BackgroundLines'
import MobileMenu from './components/MobileMenu'
import React from 'react'

function App() {
	const [isBurgerOpen, setIsBurgerOpen] = React.useState(false)
	const handleBurgerClick = () => {
		setIsBurgerOpen(!isBurgerOpen)
	}

	return (
		<BrowserRouter>
			<Header
				isBurgerOpen={isBurgerOpen}
				handleBurgerClick={handleBurgerClick}
			/>
			<MobileMenu handleBurgerClick={handleBurgerClick} isOpen={isBurgerOpen} />
			<main>
				<BackgroundLines className='w-full h-auto animate-pulse' />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<About />} />
					<Route path='/work' element={<Work />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
			<Footer />
			<ToastContainer
				position='bottom-center'
				theme='dark'
				autoClose={3000}
				hideProgressBar={true}
				closeOnClick
				pauseOnHover
			/>
			<Analytics />
		</BrowserRouter>
	)
}

export default App
