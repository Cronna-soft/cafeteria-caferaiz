import SiteContact from './SiteContact.jsx'

const FooterSite = () => {

	return (
		<div className="flex flex-wrap grow justify-center items-center text-white space-y-6 p-4 gap-2 text-center">
			{/*Horario*/}
			<div className="w-100">
				<p className="text-xl font-bold mb-2">Horario Apertura</p>
				<p className="text-md">Lunes - Viernes / 9 AM - 7 PM</p>
				<p className="text-md">Sábados - Domingos / 8 AM - 4 PM</p>
			</div>
	 		
	 		{/*Contacto*/}
	 		<SiteContact />

	 		{/*Dirección*/}
	 		<div className="w-100 text-md ">
	 			<p>Lorem ipsum, dolor sit amet.</p>
	 			<p>Lorem, ipsum, dolor.</p>
	 		</div>

	 		{/*Marca*/}
	 		<div className="w-100">
	 			<p className="text-xl font-sm mb-2">Descubre el auténtico sabor de las montañas colombianas</p>
	 		</div>

	 	</div>
	)
}

export default FooterSite