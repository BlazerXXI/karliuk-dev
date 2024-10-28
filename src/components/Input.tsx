import { useFormContext } from "react-hook-form";
import { IInput } from "src/types";
import cx from "classnames";

const Input = ({
	label,
	id,
	name,
	type = "text",
	placeholder,
	classname,
	required = false,
}: IInput) => {
	const { register } = useFormContext();

	return type === "textarea" ? (
		<div className={cx("input-wrapper", classname)}>
			<label htmlFor={id}>{label}</label>
			<textarea
				className="primary-input"
				id={id}
				placeholder={placeholder}
				required={required}
				{...register(name)}
			/>
		</div>
	) : (
		<div className={cx("input-wrapper", classname)}>
			<label htmlFor={id}>{label}</label>
			<input
				className="primary-input"
				id={id}
				type={type}
				placeholder={placeholder}
				required={required}
				{...register(name)}
			/>
		</div>
	);
};

export default Input;
