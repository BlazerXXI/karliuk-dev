import { Link } from 'react-router-dom'
import cx from 'classnames'
import { INavigationLinks } from 'src/types'

const NavigationLinks = (props: INavigationLinks) => {
	const { location, className, onClick } = props
	const ClickOnLink = () => {
		if (onClick) {
			onClick()
		}
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<nav className={cx('header__nav flex', className)}>
			<Link
				onClick={ClickOnLink}
				to='/'
				className={cx({ active: location.pathname === '/' })}
			>
				Main page
			</Link>
			{/* <Link
				onClick={ClickOnLink}
				to='/work'
				className={cx({ active: location.pathname === '/work' })}
			>
				Work
			</Link>
			<Link
				onClick={ClickOnLink}
				to='/about'
				className={cx({ active: location.pathname === '/about' })}
			>
				About
			</Link> */}
			<Link
				onClick={ClickOnLink}
				to='/contact'
				className={cx({ active: location.pathname === '/contact' })}
			>
				Contact
			</Link>
		</nav>
	)
}

export default NavigationLinks
