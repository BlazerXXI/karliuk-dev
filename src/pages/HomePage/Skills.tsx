import SkillItem from "../../components/SkillItem";
import skillData from "../../data/skillData";

const Skills = () => {
	return (
		<section className="skills flex max-lg:flex-col max-lg:gap-6 justify-between">
			<div className="lg:w-[173px] xl:w-[310px]">
				<h3 className="page-title lg:text-end">Skills</h3>
			</div>
			<div className="lg:max-w-[720px] flex flex-col gap-[45px]">
				<p className="page-paragraph">
					My skills that improve people's lives through accessible design
				</p>
				<ul className="grid grid-cols-3 lg:grid-cols-7 gap-[21px]">
					{skillData.map(({ iconName, title }) => (
						<SkillItem
							className="flex flex-col justify-center items-center"
							key={title}
							iconName={iconName}
							title={title}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
