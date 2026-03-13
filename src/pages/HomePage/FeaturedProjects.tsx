// import { Link } from "react-router-dom";
// import LinkIcon from "src/components/icons/LinkIcon";
import { Link } from 'react-router-dom'
import LinkIcon from 'src/components/icons/LinkIcon'
import Projects from 'src/components/Projects'
import Section from 'src/components/Section'
import { featureProjectsData } from 'src/data/projectsData'

const FeaturedProjects = () => {
	return (
		// <section className='featured-projects flex flex-col gap-12 justify-between'>
		<Section
			pageTitle
			title={'Featured Projects'}
			paragraph='Here are some of the selected projects that showcase my passion for
					front-end development.'
			classname='featured-projects flex flex-col gap-12 justify-between'
			titleClass='text-start'
			titleContainerClass=' '
			childrenContainerClass='flex flex-col gap-10'
			children={
				<>
					<ul className='flex flex-col gap-12'>
						<Projects projectsData={featureProjectsData} />
					</ul>
					<div>
						<Link
							className='primary-button py-[10px] btn-hover w-full flex justify-center items-center gap-4'
							to='/work'
						>
							All works <LinkIcon />
						</Link>
					</div>
				</>
			}
		/>
		/* <div className='flex flex-col max-lg:gap-6 gap-2'>
				<h3 className='page-title'>Featured Projects</h3>
				<p className='page-paragraph'>
					Here are some of the selected projects that showcase my passion for
					front-end development.
				</p>
			</div>
			<ul className='flex flex-col gap-12'>
				<Projects projectsData={featureProjectsData} />
			</ul>
			<div>
				<Link
					className="primary-button py-[10px] btn-hover w-full flex justify-center items-center gap-4"
					to="/work"
				>
					All works <LinkIcon />
				</Link>
			</div>
		</section> */
	)
}

export default FeaturedProjects
