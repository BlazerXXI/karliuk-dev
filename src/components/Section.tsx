import { ISection } from 'src/types'
import cx from 'classnames'

const Section = (props: ISection) => {
	const {
		title,
		children,
		classname,
		titleClass,
		pageTitle,
		paragraph,
		titleContainerClass,
		childrenContainerClass
	} = props
	return (
		<section
			className={`section flex justify-between max-lg:flex-col max-lg:gap-6 ${classname || ''}`}
		>
			<div
				className={cx(
					titleContainerClass || `max-lg:w-full lg:w-[173px] xl:w-[380px]`,
					paragraph && 'flex flex-col max-lg:gap-6 gap-2'
				)}
			>
				{pageTitle ? (
					<h3 className={`page-title ${titleClass || 'lg:text-end'}`}>
						{title}
					</h3>
				) : (
					<h3 className={`section-title ${titleClass || 'lg:text-end'}`}>
						{title}
					</h3>
				)}
				{paragraph && <p className='page-paragraph mt-2'>{paragraph}</p>}
			</div>
			<div className={cx(childrenContainerClass || `lg:max-w-[720px] flex flex-col gap-[45px]`)}>
				{children}
			</div>
		</section>
	)
}

export default Section
