import Button from './Button'
import SocialLink from './icons/SocialLink'
import { useForm, FormProvider, FieldValues } from 'react-hook-form'
import Input from './Input'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IContactData } from 'src/types'
import sendEmail from 'src/api/sendEmail'

const Footer = () => {
	const methods = useForm()

	const onSubmit = async (data: FieldValues) => {
		const contactData = data as IContactData

		try {
			const success = await sendEmail(contactData)

			if (success) {
				toast.success('Message sent successfully!')
				methods.reset()
			} else {
				toast.error('Failed to send the message.')
			}
		} catch (error) {
			console.log(error)
			toast.error('An error occurred. Please try again later.')
		}
	}

	return (
		<>
			<footer
				id='contact'
				className='footer flex justify-between max-lg:flex-col max-lg:gap-10'
			>
				<div className='flex flex-col lg:justify-between lg:pl-[43px]'>
					<div className='flex flex-col gap-6 lg:gap-10'>
					<div className='flex flex-col gap-4'>
						<h3 className='page-title__footer'>Let’s connect</h3>

						<div className='[&_a]:text-white [&_a]:text-lg [&_a]:lowercase [&_a]:after:bottom-[0px] flex flex-col gap-2'>
							<p className='page-paragraph flex items-center gap-2'>
								Say hello at{' '}
								<a
									className='btn-hover primary-link'
									href='mailto:ruslandendik@gmail.com'
								>
									ruslandendik@gmail.com
								</a>
							</p>
							<p className='page-paragraph flex items-center gap-2'>
								For more info, here’s my{' '}
								<a
									rel='noopener noreferrer nofollow'
									target='_blank'
									href='/resume.pdf'
									download='Ruslan_Karliuk_Frontend_Developer.pdf'
									className='btn-hover primary-link'
								>
									resume
								</a>
							</p>
						</div>
					</div>
					<div className='flex gap-6'>
						<a
							href={'https://github.com/blazerxxi'}
							target='_blank'
							rel='noopener noreferrer nofollow'
							aria-label='Visit my GitHub profile'
							className='btn-hover'
						>
							<SocialLink classname='w-[32px] h-auto' linkedinPrimary />
						</a>
						<a
							href={'https://www.linkedin.com/in/blazerxxi'}
							target='_blank'
							rel='noopener noreferrer nofollow'
							aria-label='Visit my LinkedIn profile'
							className='btn-hover'
						>
							<SocialLink classname='w-[32px] h-auto' githubPrimary />
						</a>
					</div>
					</div>
					<p className='copyright page-paragraph max-lg:hidden'>
						© {new Date().getFullYear()} Ruslan Karliuk
					</p>
				</div>
				<div className='max-lg:w-full w-full lg:max-w-[720px] max-lg:flex max-lg:flex-col max-lg:gap-10'>
					<FormProvider {...methods}>
						<form
							className='flex flex-col gap-6'
							onSubmit={methods.handleSubmit(onSubmit)}
						>
							<Input
								label='Name'
								id='name'
								name='name'
								placeholder='Enter your name'
							/>
							<Input
								label='Email'
								id='email'
								name='email'
								placeholder='Enter your email'
								type='email'
								required
							/>
							<Input
								label='Subject'
								id='subject'
								name='subject'
								placeholder='Subject'
							/>
							<Input
								label='Message'
								id='message'
								name='message'
								placeholder='Your message'
								type='textarea'
								classname='[&_textarea]:h-[156px]'
								required
							/>
							<Button className='primary-button py-5 px-10 w-fit' type='submit'>
								Submit
							</Button>
						</form>
					</FormProvider>
					<p className='copyright page-paragraph lg:hidden'>
						© {new Date().getFullYear()} Ruslan Karliuk
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
