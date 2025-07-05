import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
<<<<<<< HEAD
=======
import WhyAff7o from '../components/whyAff7o/WhyAff7o'
>>>>>>> 69aa5cef4413e482cb95bb4125632b57e282a4db
import AboutUs from '../components/aboutUs/AboutUs'
import Commission from '../components/commission/commission'
import FAQ from '../components/faq/faq'
import Hero from '../components/hero/hero'
import WhyAff7o from '../components/whyAff7o/whyAff7o'

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
