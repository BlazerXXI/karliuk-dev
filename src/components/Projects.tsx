import { IProjectCard } from "src/types";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
	projectsData: IProjectCard[];
}

const Projects: React.FC<ProjectsProps> = ({ projectsData }) => {
	return projectsData.map((project) => (
		<ProjectCard key={project.title} {...project} />
	));
};

export default Projects;
