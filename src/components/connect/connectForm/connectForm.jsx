import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import Icon from '../../../assets/play.svg?react'
import css from './ConnectForm.module.css'

export default function ConnectForm() {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirm, setShowConfirm] = useState(false)
	console.log('%cForm data:', 'color: lime; font-weight: bold;')
	return (
		<Formik
			initialValues={{
				fullName: '',
				companyName: '',
				phone: '',
				email: '',
				messenger: '',
				password: '',
				confirmPassword: '',
				acceptTerms: false,
			}}
			validate={() => ({})}
			validationSchema={Yup.object({
				fullName: Yup.string().required('Required'),
				companyName: Yup.string().required('Required'),
				phone: Yup.string().required('Required'),
				email: Yup.string().email('Invalid email').required('Required'),
				password: Yup.string().min(6).required('Required'),
				confirmPassword: Yup.string()
					.oneOf([Yup.ref('password')], 'Passwords must match')
					.required('Required'),
				acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
			})}
			onSubmit={values => {
				console.log('Form data', values)
				alert(JSON.stringify(values, null, 2))
			}}
		>
			{() => (
				<Form className={css.form}>
					<div className={css.row}>
						<label className={css.flex1}>
							<span className={css.labelText}>Full Name *</span>
							<Field
								name='fullName'
								placeholder='Enter name'
								className={css.input}
							/>
							<ErrorMessage
								name='fullName'
								component='div'
								className={css.error}
							/>
						</label>
						<label className={css.flex1}>
							<span className={css.labelText}>Company Name *</span>
							<Field
								name='companyName'
								placeholder='Enter company name'
								className={css.input}
							/>
							<ErrorMessage
								name='companyName'
								component='div'
								className={css.error}
							/>
						</label>
					</div>

					<div className={css.row}>
						<label className={css.flex1}>
							<span className={css.labelText}>Phone *</span>
							<Field
								name='phone'
								placeholder='Enter phone'
								className={css.input}
							/>
							<ErrorMessage
								name='phone'
								component='div'
								className={css.error}
							/>
						</label>
						<label className={css.flex1}>
							<span className={css.labelText}>Email *</span>
							<Field
								name='email'
								placeholder='Enter email'
								className={css.input}
							/>
							<ErrorMessage
								name='email'
								component='div'
								className={css.error}
							/>
						</label>
					</div>

					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Messenger</span>
						<Field
							name='messenger'
							placeholder='Enter messenger'
							className={css.input}
						/>
					</label>
					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Password *</span>
						<div className={css.inputWrap}>
							<Field
								name='password'
								type={showPassword ? 'text' : 'password'}
								placeholder='Enter password'
								className={css.input}
							/>
							<span
								className={css.eye}
								onClick={() => setShowPassword(prev => !prev)}
							>
								{showPassword ? (
									<img
										src='/passwordOn.svg'
										alt='Hide'
										width='16'
										height='16'
									/>
								) : (
									<img
										src='/passwordOff.svg'
										alt='Show'
										width='16'
										height='16'
									/>
								)}
							</span>
						</div>
						<ErrorMessage
							name='password'
							component='div'
							className={css.error}
						/>
					</label>

					<label className={css.labelWithIcon}>
						<span className={css.labelText}>Confirm Password *</span>
						<div className={css.inputWrap}>
							<Field
								name='confirmPassword'
								type={showConfirm ? 'text' : 'password'}
								placeholder='Enter password'
								className={css.input}
							/>
							<span
								className={css.eye}
								onClick={() => setShowConfirm(prev => !prev)}
							>
								{showConfirm ? (
									<img
										src='/passwordOn.svg'
										alt='Hide'
										width='16'
										height='16'
									/>
								) : (
									<img
										src='/passwordOff.svg'
										alt='Show'
										width='16'
										height='16'
									/>
								)}
							</span>
						</div>
						<ErrorMessage
							name='confirmPassword'
							component='div'
							className={css.error}
						/>
					</label>
					<div>
						<label className={css.checkboxWrap}>
							<Field
								type='checkbox'
								name='acceptTerms'
								className={css.checkboxInput}
							/>
							<span className={css.customCheckbox}></span>I accept the Terms and
							Conditions
						</label>
						<ErrorMessage
							name='acceptTerms'
							component='div'
							className={css.error}
						/>
					</div>

					<button type='submit' className={css.button}>
						Become a Partner
						<Icon className={css.icon} />
					</button>
				</Form>
			)}
		</Formik>
	)
}
