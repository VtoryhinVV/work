import css from './button.module.css'
import Icon from '/public/play.svg?react'
import IconQuestion from '/public/questions.svg?react'
export default function Button({ icon, children }) {
	return (
		<button className={css.button}>
			<p>{children}</p>

			{icon ? (
				<IconQuestion className={css.icon} />
			) : (
				<Icon className={css.icon} />
			)}
		</button>
	)
}
