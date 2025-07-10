const MobileButton = ({menuOpen}) => {

	return (
	 <>
		{menuOpen ? (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
			) : (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		)}	
	 </>
	)
}

export default MobileButton