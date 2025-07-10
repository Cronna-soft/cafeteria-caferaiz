const SocialItems = ({social}) => {
	const {user, icon, url} = social

	return (
		<a 
			href={url} 
			target="_blank"
			rel="noopener noreferrer"
			className="mx-2 text-[var(--primary-color)] text-3xl transition hover:text-[var(--accent-color)] hover:drop-shadow-lg hover:text-[2.5rem] duration-500"
			title={user}
		>
			<i className={icon}></i>
		</a>
	)
}

export default SocialItems