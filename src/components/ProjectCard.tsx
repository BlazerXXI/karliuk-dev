import { IProjectCard } from 'src/types'
import LinkIcon from './icons/LinkIcon'
import SocialLink from './icons/SocialLink'
import cx from 'classnames'

const ProjectCard = (props: IProjectCard) => {
	const { image, title, description, year, demoLink, githubLink } = props
	return (
		<li className='flex max-lg:flex-col justify-between gap-3 lg:gap-[45px]'>
			<div className='inline-flex h-full lg:bg-[#1a1a1a] rounded-[32px]'>
				<a
					className='lg:py-5 lg:px-[43px] btn-hover'
					href={demoLink}
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<img
						className='rounded-[32px] max-lg:w-full object-contain'
						src={image}
						alt={title || description || 'project image'}
						loading='lazy'
						width={470}
						height={335}
					/>
				</a>
			</div>
			<div className='flex flex-col gap-5 lg:gap-6'>
				<div className='lg:max-w-[720px] flex flex-col gap-12 lg:gap-6'>
					<div className='flex flex-col gap-4'>
						<a
							href={demoLink}
							target='_blank'
							rel='noopener noreferrer nofollow'
						>
							<h3 className='page-subtitle'>{title || 'No title'}</h3>
						</a>
						<p className='page-paragraph max-lg:hidden'>
							{description || 'No description'}
						</p>
					</div>
					<div className='max-lg:hidden'>
						<p className='uppercase text-base pb-4 project-info border-b border-solid border-[#484848]'>
							Project info
						</p>
						<div className='flex justify-between text-base py-4 project-info__year border-b border-solid border-[#484848]'>
							<p>Year</p>
							<p className='secondary-text-color'>{year || 'unknown'}</p>
						</div>
					</div>
				</div>
				<div className='flex items-center gap-6 max-lg:w-full max-lg:justify-center max-lg:[&>*]:w-full max-lg:[&>*]:justify-center'>
					<a
						href={demoLink}
						className={cx(
							'primary-link btn-hover flex items-center gap-1',
							!demoLink && 'disabled'
						)}
						target='_blank'
						rel='noopener noreferrer nofollow'
					>
						Live demo
						<LinkIcon primary />
					</a>
					<a
						href={githubLink}
						className={cx(
							'primary-link btn-hover flex items-center gap-1',
							!githubLink && 'disabled'
						)}
						target='_blank'
						rel='noopener noreferrer nofollow'
					>
						See on Github
						<SocialLink githubPrimary />
					</a>
				</div>
			</div>
		</li>
	)
}

export default ProjectCard
