import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ScrollToTopButton from './components/scrollUpBtn/scrollToTopButton'

import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/privacy_policy' element={<PrivacyPolicy />} />
			</Routes>

			<Footer />
			<ScrollToTopButton />
		</>
	)
}
