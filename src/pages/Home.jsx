import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import WhyAff7o from '../components/WhyAff7o/WhyAff7o'
import AboutUs from '../components/aboutUs/AboutUs'
import Commission from '../components/commission/commission'
import Hero from '../components/hero/hero'
import FAQ from '../components/faq/FAQ'

export default function Home() {
	const location = useLocation()

	useEffect(() => {
		const hash = location.hash
		if (hash) {
			const el = document.querySelector(hash)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location])

	return (
		<main>
			<Hero />
			<WhyAff7o />
			<Commission />
			<AboutUs />
			<FAQ />
		</main>
	)
}
