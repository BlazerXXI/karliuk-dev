import cx from "classnames";
import { SkillItemProps } from "src/types";

const SkillItem = (props: SkillItemProps) => {
	const { className, iconName, title } = props;
	return (
		<li className={cx("skill-item", className)}>
			<img className="btn-hover" src={iconName} alt={title} loading="lazy" width={80} height={80} />
			<span className="hidden">{title}</span>
		</li>
	);
};

export default SkillItem;
