import { Link, useLocation } from 'react-router-dom'
import Burger from './Burger'
import { IHeaderProps } from 'src/types'
import NavigationLinks from './NavigationLinks'

const Header = (props: IHeaderProps) => {
	const { isBurgerOpen, handleBurgerClick } = props
	const location = useLocation()

	return (
		<header className='header fixed w-full z-30 left-1/2 transform -translate-x-1/2 top-0 flex justify-between items-center py-4 md:py-6'>
			<Link
				className='header__title'
				onClick={() =>
					window.scrollTo({
						top: 0,
						behavior: 'smooth'
					})
				}
				to='/'
			>
				Ruslan Karliuk
			</Link>
			<NavigationLinks
				className='max-md:hidden col-span-3 gap-8'
				location={location}
			/>
			<Burger
				isBurgerOpen={isBurgerOpen}
				handleBurgerClick={handleBurgerClick}
			/>
		</header>
	)
}

export default Header
