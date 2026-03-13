import Section from 'src/components/Section'
import SkillItem from '../../components/SkillItem'
import skillData from '../../data/skillData'

const Skills = () => {
	return (
			<Section
				title='Skills'
				children={
					<>
						<p className='page-paragraph'>
							My skills that improve people's lives through accessible design
						</p>
						<ul className='grid grid-cols-3 lg:grid-cols-7 gap-[21px]'>
							{skillData.map(({ iconName, title }) => (
								<SkillItem
									className='flex flex-col justify-center items-center'
									key={title}
									iconName={iconName}
									title={title}
								/>
							))}
						</ul>
					</>
				}
			/>
	)
}

export default Skills
