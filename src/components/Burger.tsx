import cx from 'classnames'
import { IBurgerProps } from 'src/types'

const Burger = ({ isBurgerOpen, handleBurgerClick }: IBurgerProps) => {
	return (
		<>
			<div
				className='header__burger md:hidden w-8 h-8 flex flex-col justify-center items-center gap-3 cursor-pointer hover:opacity-70 hover:scale-95 transition-transform active:scale-90 position-relative'
				onClick={handleBurgerClick}
			>
				<span
					className={cx(
						'burger__line h-0.5 w-full bg-[#C7C7C7] transition-all duration-300 ease-in',
						{
							'translate-y-1.5 rotate-45': isBurgerOpen
						}
					)}
				></span>
				<span
					className={cx(
						'burger__line h-0.5 w-full bg-[#C7C7C7] transition-all duration-300 ease-in',
						{
							'-translate-y-2 -rotate-45': isBurgerOpen
						}
					)}
				></span>
			</div>
		</>
	)
}

export default Burger
