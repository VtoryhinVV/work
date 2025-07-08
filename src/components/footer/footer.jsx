import { Link } from 'react-router-dom'
import css from './footer.module.css'
export default function Footer() {
	const links = [
		{ name: 'Why Aff7o?', path: '/#why_Aff7o' },
		{ name: 'Commission', path: '/#commission' },
		{ name: 'About Us', path: '/#about_us' },
		{ name: 'FAQ', path: '/#FAQ' },
		{ name: 'Privacy Policy', path: '/privacy_policy' },
	]
	const navLinks = links.map((link, index) => (
		<Link key={index} to={link.path}>
			{link.name}
		</Link>
	))
	return (
		<footer>
			<div className='container'>
				<nav className={css.footer___nav}>
					<Link to='/' className={css.header___logo}>
						<img src='/logo.svg' alt='Logo' width='94' height='65' />
					</Link>
					<div className={css.footer___mainBtn}>
						{navLinks}
						<Link to='/terms_and_conditions'>Terms &amp; Conditions</Link>
						<Link to='/#contact'>Contact</Link>
					</div>
					<p>Copyright © 2025 | Aff7o Affiliates</p>
				</nav>
			</div>
		</footer>
	)
}
