const SocialDev = () => {
	const social = [
		{
			name: "Github",
			icon: "bi bi-github",
			url: "https://github.com/Cronna-soft/"
		},
		{
			name: "Instagram",
			icon: "bi bi-instagram",
			url: "https://www.instagram.com/mr.dannnor_"
		},
		{
			name: "Linkedin",
			icon: "bi bi-linkedin",
			url: "https://www.linkedin.com/in/dannnor"
		},
		{
			name: "WhatsApp",
			icon: "bi bi-whatsapp",
			url: "https://api.whatsapp.com/send?phone=573175403782"
		}
	]

	return (
		<div className="flex gap-2">
			{social.map((s, index) => (
				<a 
					key={index}
					href={s.url}
					target="_blank"
					rel="noopener noreferrer"
					className="mx-2 text-[var(--secundary-color)] text-2xl transition hover:text-[#d3b495] hover:drop-shadow-lg hover:text-4xl duration-500"
					title={s.name}
				>
					<i className={s.icon}></i>
				</a>
			))}
		</div>
	)
}

export default SocialDev