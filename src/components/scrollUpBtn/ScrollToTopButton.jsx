import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 300)
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		if (window.location.hash) {
			history.replaceState(
				null,
				'',
				window.location.pathname + window.location.search
			)
		}
	}

	if (!visible) return null

	return (
		<button
			onClick={handleClick}
			style={{
				position: 'fixed',
				bottom: '30px',
				right: '30px',
				padding: '10px 20px',
				fontSize: '16px',
				zIndex: 1000,
				backgroundColor: '#007bff',
			}}
		>
			Наверх
		</button>
	)
}
