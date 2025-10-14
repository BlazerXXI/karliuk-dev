import cx from 'classnames'
import { IMobileMenu } from 'src/types'
import NavigationLinks from './NavigationLinks'
import { useLocation } from 'react-router-dom'

const MobileMenu = (props: IMobileMenu) => {
	const { isOpen, handleBurgerClick } = props
	const location = useLocation()

	return (
		<>
			<div
				className={cx(
					'mobile-menu fixed top-0 left-0 w-full min-h-[50%] max-h-full pt-16 pb-10 px-4 bg-[#0A0A0Afa] shadow-md shadow-[#0A0A0A]  flex flex-col justify-center items-center gap-8  z-20 transition-transform duration-300 ease-in ',
					{
						'-translate-y-full': !isOpen
					}
				)}
			>
				<NavigationLinks
					onClick={handleBurgerClick}
					className='flex flex-col items-center gap-8'
					location={location}
				/>
			</div>
			<div
				style={{
					opacity: isOpen ? 0.5 : 0,
					pointerEvents: isOpen ? 'auto' : 'none'
				}}
				className={cx(
					'mobile-menu__overlay absolute top-0 left-0 w-full h-full bg-[#0A0A0A] opacity-50 z-10 transition-all blur-md duration-[1500ms] ease-in'
				)}
				onClick={handleBurgerClick}
			></div>
		</>
	)
}

export default MobileMenu
