import { Link } from 'react-router-dom'
import css from './footer.module.css'
export default function Footer() {
	const links = [
		{ name: 'Why Aff7o?', path: '/#why_Aff7o' },
		{ name: 'Commission', path: '/#commission' },
		{ name: 'About Us', path: '/#about_us' },
		{ name: 'FAQ', path: '/#FAQ' },
		{ name: 'Privacy Policy', path: '/privacy_policy' },
		{ name: 'Contact', path: '/#contact' },
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
					<div className={css.footer___mainBtn}>{navLinks}</div>
					<div className={css.footer___copyright}>
						<p>Copyright © 2025 | Aff7o Affiliates</p>
					</div>
				</nav>
			</div>
		</footer>
	)
}
