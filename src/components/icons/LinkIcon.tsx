const LinkIcon = (props: { primary?: boolean }) => {
	const { primary } = props;
	return !primary ? (
		<svg
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_344_638)">
				<rect
					x="0.5"
					y="0.465332"
					width="24"
					height="24"
					rx="12"
					fill="black"
				/>
				<path
					d="M6.4897 19.6828L16.8036 9.36896V16.8544L18.8033 16.8544L18.8033 5.95505L7.90391 5.95505L7.90391 7.95475L15.3893 7.95475L5.07549 18.2686L6.4897 19.6828Z"
					fill="#D3E97A"
				/>
			</g>
			<defs>
				<clipPath id="clip0_344_638">
					<rect
						x="0.5"
						y="0.465332"
						width="24"
						height="24"
						rx="12"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	) : (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_210_1127)">
				<path
					d="M5.9897 19.6828L16.3036 9.3689V16.8543L18.3033 16.8543L18.3033 5.95499L7.40391 5.95499L7.40391 7.95469L14.8893 7.95469L4.57549 18.2685L5.9897 19.6828Z"
					fill="#D3E97A"
				/>
			</g>
			<defs>
				<clipPath id="clip0_210_1127">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0 0.465332)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default LinkIcon;
