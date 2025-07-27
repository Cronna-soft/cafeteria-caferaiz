import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { SocialList } from '../../components'
import NavDesktop from './NavDesktop.jsx'
import NavMobile from './NavMobile.jsx'
import MobileButton from './MobileButton.jsx'
import navLinks from '../../data/navLinks.json'
import navImage from '../../assets/nav-image.png'

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(!menuOpen)
	const closeMenu = () => setMenuOpen(false)

	return (
	 	<nav className="sticky top-0 z-50 bg-[#d3b495] shadow-md">
	 		<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
	 			{/*LOGO*/}
	 			<Link to="/" className="text-2xl font-bold text-gray-900">
	 				<img className="nav-image" src={navImage} alt="Imagen Nav Cronna" title="Café Raíz" />
	 			</Link>

	 			<div className="hidden md:block">
 					<SocialList />
	 			</div>

	 			{/*MOBILE BOTON*/}
	 			<button 
	 				onClick={toggleMenu}
	 				className="md:hidden text-gray-700 focus:outline-none"
	 				aria-label="Abrir menú"
	 			>
	 				<MobileButton menuOpen={menuOpen} />
	 			</button>
	 		</div>
	 		
 			{/*DESKTOP MENÚ*/}
 			<ul className="md:flex hidden md:block w-md py-4 mx-auto justify-evenly gap-8 text-[--primary-color] text-md font-semibold">
 				<NavDesktop links={navLinks} Component={NavLink} />
 			</ul>

	 		{/*MOBILE MENU*/}
	 		{menuOpen && (
	 			<>
		 			<ul className="md:hidden bg-[var(#d3b495)] mt-4 px-4 pb-6 flex flex-col items-center gap-4 text-lg font-semibold text-gray-700 transition-all duration-300">
		 				<NavMobile links={navLinks} onCloseMenu={closeMenu} Component={NavLink} />	 				
		 			</ul>
		 			<div className="flex md:hidden justify-center pb-4">
		 				<SocialList />
		 			</div>
	 			</>
	 		)}
	 	</nav>
	)
}