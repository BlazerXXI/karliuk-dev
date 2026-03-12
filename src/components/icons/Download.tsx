import cx from 'classnames'
const DownloadIcon = (props: { primary?: boolean; className?: string }) => {
	const { primary, className } = props
	return (
		<div
			className={cx('w-10 h-10 rounded-full flex justify-center items-center', {
				'bg-black': primary,
				'bg-gray-700': !primary,
				className
			})}
		>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M10.0003 13.333L13.3337 9.16634H10.8337V3.33301H9.16699V9.16634H6.66699L10.0003 13.333Z'
					fill='white'
				/>
				<path
					d='M16.667 15.0003H3.33366V9.16699H1.66699V15.0003C1.66699 15.9195 2.41449 16.667 3.33366 16.667H16.667C17.5862 16.667 18.3337 15.9195 18.3337 15.0003V9.16699H16.667V15.0003Z'
					fill='white'
				/>
			</svg>
		</div>
	)
}

export default DownloadIcon
