import ReactIcon from "src/assets/skills/React.png";
import TypescriptIcon from "src/assets/skills/Typescript.png";
import ReduxIcon from "src/assets/skills/Redux.png";
import HtmlIcon from "src/assets/skills/HTML.png";
import CSSIcon from "src/assets/skills/CSS.png";
import JavascriptIcon from "src/assets/skills/Javascript.png";
import GitIcon from "src/assets/skills/Git.png";
import NextJSIcon from "src/assets/skills/NextJS.png";
import NodeJSIcon from "src/assets/skills/NodeJS.png";
import ExpressIcon from "src/assets/skills/Express.png";
import MongoDBIcon from "src/assets/skills/MongoDB.png";
import FigmaIcon from "src/assets/skills/Figma.png";
import AdobeIllustratorIcon from "src/assets/skills/AdobeIllustrator.png";

import { Skill } from "src/types";

// array with objects that follow the Skill interface
const skillData: Skill[] = [
	{ iconName: ReactIcon, title: "React" },
	{ iconName: TypescriptIcon, title: "TypeScript" },
	{ iconName: ReduxIcon, title: "Redux" },
	{ iconName: HtmlIcon, title: "HTML" },
	{ iconName: CSSIcon, title: "CSS" },
	{ iconName: JavascriptIcon, title: "JavaScript" },
	{ iconName: GitIcon, title: "Git" },
	{ iconName: NextJSIcon, title: "Next.js" },
	{ iconName: NodeJSIcon, title: "Node.js" },
	{ iconName: ExpressIcon, title: "Express" },
	{ iconName: MongoDBIcon, title: "MongoDB" },
	{ iconName: FigmaIcon, title: "Figma" },
	{ iconName: AdobeIllustratorIcon, title: "Adobe Illustrator" },
];

export default skillData;
