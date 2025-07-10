const NavDesktop = ({links, onCloseMenu, Component}) => {

	return (
	 <>
		{links.map(({to, label}) => (
			<li key={to}>
				<NavLink
					to={to}
					onClick={onCloseMenu}
					className={({ isActive }) => isActive ? "text-[var(--accent-color)] font-bold navbar-links" : "hover:text-[var(--accent-color)] transition"}
				>
				 {label}
				</NavLink>
			</li>
		))}
	 </>
	)
}

export default NavDesktop