import { Link } from "react-router-dom";
import LinkIcon from "../../components/icons/LinkIcon";

const About = () => {
	return (
		<section className="about flex justify-between items-center max-lg:flex-col max-lg:gap-6">
			<div className="max-lg:w-full lg:w-[173px] xl:w-[310px]">
				<p className="page-title lg:text-end">About me</p>
			</div>
			<div className="lg:max-w-[720px] flex flex-col gap-[45px]">
				<div className="flex flex-col gap-4">
					<h2 className="page-subtitle max-lg:hidden">
						I am a Front-end developer.
					</h2>
					<p className="page-paragraph">
						As a motivated and skilled Front-End Developer, I bring extensive
						experience in crafting dynamic web applications and ecommerce
						platforms using powerful tools like React. Renowned for my
						self-development and quick learning abilities, I consistently seek
						opportunities to refine my technical skills and contribute to
						innovative projects within the tech industry.
					</p>
				</div>
				<Link
					to="/about"
					className="primary-link btn-hover items-center gap-1 inline-flex w-fit max-lg:w-full"
				>
					More about me <LinkIcon primary />
				</Link>
			</div>
		</section>
	);
};

export default About;
