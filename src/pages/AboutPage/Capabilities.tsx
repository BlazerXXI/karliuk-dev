import Section from 'src/components/Section'

const Capabilities = () => {
	const skills = [
		'HTML',
		'CSS',
		'Scss',
		'Javascript',
		'Typescript',
		'Figma',
		'Tailwind Css',
		'React',
		'Next.js',
		'Redux',
		'GraphQL',
		'Shopify',
		'Liquid'
	]

	return (
		<Section
			title='My Capabilities'
			children={
				<>
					<div className='flex flex-col gap-8'>
						<p className='page-paragraph'>
							I am always looking to add more skills.
						</p>
						<ul className='page-paragraph flex flex-wrap gap-4'>
							{skills.map(skill => (
								<li
									className='btn btn-hover border border-[1px solid #484848] rounded-full px-10 py-5 text-base uppercase font-bold text-white'
									key={skill}
								>
									{skill}
								</li>
							))}
						</ul>
					</div>
				</>
			}
		/>
	)
}

export default Capabilities
