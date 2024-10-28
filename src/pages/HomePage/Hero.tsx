import avatarImage from "../../assets/hero/avatar.png";
import Button from "../../components/Button";
import LinkIcon from "../../components/icons/LinkIcon";
import SocialLink from "../../components/icons/SocialLink";

const Hero = () => {
	return (
		<section className="hero flex max-lg:flex-col-reverse max-lg:gap-10 items-center justify-between ">
			<div className="flex flex-col gap-8 lg:gap-10 max-lg:w-full">
				<div className="lg:max-w-[540px] max-lg:flex max-lg:flex-col max-lg:gap-3">
					<h1 className="page-title">
						hi, i am <br /> Ruslan Karliuk.
					</h1>
					<p className="page-paragraph">
						Front-end developer passionate about building accessible and user
						friendly websites.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="inline-flex gap-4 items-center max-lg:justify-between">
						<Button className="primary-button btn-hover gap-3 px-[16px] py-[14px] pr-[5px] max-lg:w-full">
							Contact me <LinkIcon />
						</Button>
						<a
							rel="noopener noreferrer nofollow"
							target="_blank"
							href="/resume.pdf"
							download="Ruslan_Karliuk_Frontend_Developer.pdf"
							className="primary-link btn-hover flex items-center gap-1 max-lg:w-full max-lg:justify-center"
						>
							View Resume <LinkIcon primary />
						</a>
					</div>
					<div className="inline-flex items-center gap-4">
						<a
							href={"https://github.com/blazerxxi"}
							target="_blank"
							rel="noopener noreferrer nofollow"
							aria-label="Visit my GitHub profile"
							className="btn-hover"
						>
							<SocialLink linkedin />
						</a>
						<a
							href={"https://www.linkedin.com/in/blazerxxi"}
							target="_blank"
							rel="noopener noreferrer nofollow"
							aria-label="Visit my LinkedIn profile"
							className="btn-hover"
						>
							<SocialLink github />
						</a>
					</div>
				</div>
			</div>
			<div>
				<img
					className="max-lg:w-[250px] max-lg:h-auto"
					src={avatarImage}
					alt="avatar.png"
					width={420}
					height={420}
				/>
			</div>
		</section>
	);
};

export default Hero;
