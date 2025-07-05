import css from './whyAff7oCard.module.css'
export default function WhyAff7oCard({ info }) {
	return (
		<li className={css.card}>
			<svg width='60' height='60' viewBox='0 0 60 60'>
				<use href={info.svg} />
			</svg>
			<h3>{info.name}</h3>
			<p>{info.text}</p>
		</li>
	)
}
