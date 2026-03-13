import DownloadIcon from 'src/components/icons/Download'
import SocialLink from 'src/components/icons/SocialLink'
import Section from 'src/components/Section'
import { IAboutMeProps } from 'src/types'

const AboutMe = (props: IAboutMeProps) => {
	const { buttons } = props

	return (
		<>
			<Section
				pageTitle
				title='About me'
				children={
					<>
						<div className='flex flex-col gap-4'>
							<h2 className='page-subtitle max-lg:hidden'>
								I am a Front-end developer.
							</h2>
							<p className='page-paragraph'>
								As a motivated and skilled Front-End Developer, I bring
								extensive experience in crafting dynamic web applications and
								ecommerce platforms using powerful tools like React. Renowned
								for my self-development and quick learning abilities, I
								consistently seek opportunities to refine my technical skills
								and contribute to innovative projects within the tech industry.
							</p>
						</div>
						{buttons && (
							<div className='inline-flex items-center gap-4'>
								<a
									rel='noopener noreferrer nofollow'
									target='_blank'
									href='/resume.pdf'
									download='Ruslan_Karliuk_Frontend_Developer.pdf'
									className='button primary-button btn-hover gap-3 px-[16px] py-[14px] pr-[5px] max-lg:w-full max-w-[234px] justify-center items-center flex'
								>
									Download Resume <DownloadIcon primary />
								</a>
								<a
									href={'https://www.linkedin.com/in/blazerxxi'}
									aria-label='Visit my LinkedIn profile'
									target='_blank'
									rel='noopener noreferrer nofollow'
									className='btn-hover'
								>
									<SocialLink linkedin />
								</a>
								<a
									href={'https://github.com/blazerxxi'}
									aria-label='Visit my GitHub profile'
									target='_blank'
									rel='noopener noreferrer nofollow'
									className='btn-hover'
								>
									<SocialLink github />
								</a>
							</div>
						)}
					</>
				}
			/>
		</>
	)
}

export default AboutMe
