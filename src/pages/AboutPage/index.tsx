import AboutMe from '../HomePage/AboutMe'
import Capabilities from './Capabilities'

const About = () => {
	return (
		<div>
			<h3 className='page-title hidden'>About</h3>
			<AboutMe buttons />
			<Capabilities />
			{/* <Experience /> */}
		</div>
	)
}

export default About
