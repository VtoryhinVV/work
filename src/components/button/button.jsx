import Icon from '../../assets/play.svg?react'
import IconQuestion from '../../assets/questions.svg?react'
import css from './button.module.css'
export default function Button({ icon, children }) {
	return (
		<a href='https://admin.aff7o.com/partner/register' className={css.button}>
			{children}

			{icon ? <IconQuestion /> : <Icon />}
		</a>
	)
}
