const NavDesktop = ({links, Component}) => {

	return (
	 <>
		{links.map(({to, label}) => (
			<li key={to}>
				<Component
					to={to}
					className={({ isActive }) => isActive ? "text-[var(--accent-color)] font-bold navbar-links" : "hover:text-[var(--accent-color)] hover:drop-shadow-lg hover:text-lg duration-300"}
				>
				 {label}
				</Component>
			</li>
		))}
	 </>
	)
}

export default NavDesktop