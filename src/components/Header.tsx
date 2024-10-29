import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

const Header = () => {
	const location = useLocation();

	return (
		<header className="header fixed w-full z-10 left-1/2 transform -translate-x-1/2 top-0 flex justify-between items-center py-4 md:py-6">
			<Link className="header__title" to="/">
				Ruslan Karliuk
			</Link>
			<nav className="header__nav flex col-span-3 gap-8">
				{/* <Link
					to="/work"
					className={cx({ active: location.pathname === "/work" })}
				>
					Work
				</Link> */}
				{/* <Link
					to="/about"
					className={cx({ active: location.pathname === "/about" })}
				>
					About
				</Link>
				<Link
					to="/contact"
					className={cx({ active: location.pathname === "/contact" })}
				>
					Contact
				</Link> */}
			</nav>
		</header>
	);
};

export default Header;
