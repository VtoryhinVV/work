import { Link } from 'react-router-dom'
import css from './header.module.css'

export default function Header() {
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
		<header className={css.header}>
			<div className='container'>
				<nav className={css.header___nav}>
					<Link to='/' className={css.header___logo}>
						<img src='/logo.svg' alt='Logo' width='94' height='65' />
					</Link>
					<div className={css.header___mainBtn}>{navLinks}</div>
					<div className={css.header___reg_nav}>
						<a href='https://admin.aff7o.com/partner/login'>Log in</a>
						<div></div>
						<a
							className={css.header___regBtn}
							href='https://admin.aff7o.com/partner/register'
						>
							Become an Partner
						</a>
					</div>
					{/* <BurgerButton>
						<div className={css.header___mainBtnMob}>{navLinks}</div>
						<div>
							<a href='https://admin.aff7o.com/partner/login'>Log in</a>
							<a href='https://admin.aff7o.com/partner/register'>
								Become an Partner
							</a>
						</div>
					</BurgerButton> */}
				</nav>
			</div>
		</header>
	)
}
