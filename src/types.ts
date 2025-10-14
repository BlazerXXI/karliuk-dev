export interface IButton {
	children: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	className?: string
}

export interface Skill {
	iconName: string
	title: string
}

export interface SkillItemProps {
	className?: string
	iconName: string
	title: string
}

export interface IProjectCard {
	title: string
	description: string
	image: string
	year: string
	demoLink?: string
	githubLink?: string
}

export interface IInput {
	required?: boolean
	classname?: string
	label: string
	id: string
	name: string
	type?: string
	placeholder?: string
}

export interface IContactData {
	name: string
	email: string
	message: string
}

export interface IBurgerProps {
	isBurgerOpen: boolean
	handleBurgerClick: () => void
	location?: { pathname: string }
}

export interface ILocationProps {
	location: {
		pathname: string
	}
}

export interface INavigationLinks extends ILocationProps {
	className?: string
	onClick?: () => void
}

export interface IMobileMenu {
	handleBurgerClick: () => void
	isOpen: boolean
	className?: string
}

export interface IHeaderProps extends IBurgerProps {
	className?: string
}
