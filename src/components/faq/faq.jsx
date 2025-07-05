import Button from '../button/button'
import css from './faq.module.css'
import FaqAccordion from './faqAccordion/faqAccordion'

export default function FAQ() {
	const faqItems = [
		{ name: 'Why choose Aff7o Affiliates?' },
		{ name: 'How to get started?' },
		{ name: 'What commission models are available?' },
		{ name: 'Which GEOs and traffic types are accepted?' },
		{ name: 'When do payouts happen?' },
	]
	return (
		<section id='FAQ' className={css.faq}>
			<div className='container'>
				<h2>FAQs</h2>
				<ul className={css.faq__accordion}>
					{faqItems.map((item, index) => (
						<FaqAccordion key={index} item={item} />
					))}
				</ul>
				<Button icon>Still Have questions?</Button>
			</div>
		</section>
	)
}
