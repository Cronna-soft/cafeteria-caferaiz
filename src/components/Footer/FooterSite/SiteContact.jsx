const SiteContact = () => {

	const contacto = [
		{
			icon: "bi bi-envelope",
			data: "Contacto",
			url: "#"
		},
		{
			icon: "bi bi-whatsapp",
			data: "WhatsApp",
			url: "#"
		}
	]

	return (
		<div>
			<ul>
				{contacto.map((c, index) => (
					<li key={index} className="w-100">
						<a href={c.url} className="text-xl">
							<i className={`${c.icon} px-20`}> {c.data}</i>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SiteContact