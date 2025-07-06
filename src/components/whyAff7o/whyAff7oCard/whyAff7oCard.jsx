import css from './whyAff7oCard.module.css'
export default function WhyAff7oCard({ info }) {
	return (
		<li className={css.card}>
			<img src={`/public/${info.svg}`} alt='icon' width='50' height='50' />
			<h3>{info.name}</h3>
			<p>{info.text}</p>
		</li>
	)
}
