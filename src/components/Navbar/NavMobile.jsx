const NavDesktop = ({links, onCloseMenu, Component}) => {

	return (
	 <>
		{links.map(({to, label}) => (
			<li key={to}>
				<Component
					to={to}
					onClick={onCloseMenu}
					className={({ isActive }) => isActive ? "text-[var(--accent-color)] font-bold navbar-links" : "hover:text-[var(--accent-color)] transition"}
				>
				 {label}
				</Component>
			</li>
		))}
	 </>
	)
}

export default NavDesktop