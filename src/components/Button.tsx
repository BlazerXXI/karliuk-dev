import { IButton } from "../types";
import cx from "classnames";

const Button = (props: IButton) => {
	const { type, onClick, className, children } = props;
	return (
		<button
			type={type || "button"}
			onClick={onClick}
			className={cx("button", className)}
		>
			{children}
		</button>
	);
};

export default Button;
