import { IProjectCard } from "src/types";

import WeatherNextImage from "src/assets/projects-images/weather-next-nine.vercel.app.png";
import StrietchCeilingsImage from "src/assets/projects-images/blazerxxi.github.io_stretch-ceilings_.png";
import RelviseImage from "src/assets/projects-images/relvise-website.netlify.app_.png";

export const featureProjectsData: IProjectCard[] = [
	{
		title: "Weather Next — Weather Forecast on Next.js + PWA",
		description:
			"Developed a weather forecast web application using Next.js. The app provides real-time weather data with an intuitive user interface and a responsive design. The project also integrates weather APIs for accurate information, with Next.js utilized for server-side rendering and performance optimization.",
		image: WeatherNextImage,
		year: "2024",
		demoLink: "https://weather-next-nine.vercel.app",
		githubLink: "https://github.com/BlazerXXI/weather-next",
	},
	{
		title: "Stretch Ceilings — Website Concept",
		description:
			"Designed a concept single-page website for a stretch ceiling installation company using HTML, CSS, Sass, React, and JavaScript. The project includes a responsive design and interactive elements that showcase the company’s services. The site is optimized for fast loading and mobile usability.",
		image: StrietchCeilingsImage,
		year: "2023",
		demoLink: "https://blazerxxi.github.io/stretch-ceilings/",
		githubLink:
			"https://github.com/BlazerXXI/stretch-ceilings/deployments/github-pages",
	},
	{
		title: "Relvise — Business Consulting  Website Concept",
		description:
			"Developed a single-page website for a business consulting company. The project utilized HTML and CSS to create a modern and responsive design. The website is optimized for various devices, ensuring smooth navigation and fast page loading",
		image: RelviseImage,
		year: "2022",
		demoLink: "https://relvise-website.netlify.app/",
		githubLink: "https://github.com/BlazerXXI/Relvise",
	},
];
