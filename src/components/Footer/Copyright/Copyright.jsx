import SocialDev from './SocialDev.jsx'

const Copyright = () => {

	return (
		<div className="flex flex-wrap justify-center lg:justify-between text-center items-center text-white px-4 gap-5">
			{/*Derechos DEV*/}
	 		<div className="text-left text-xl">
	 			<p>Derechos Reservados &copy; {new Date().getFullYear()} | Proyecto: Café Raíz</p>
	 		</div>


	 		{/*Derechos diseñado*/}
	 		<div className="flex flex-col sm:flex-row items-center sm:flex-end gap-5 md:gap-20">
		 		{/*Redes sociales DEV*/}
	 			<SocialDev />

	 			<h6 className="font-bold text-lg">Diseñado por Cronna Soft</h6>
	 		</div>
		</div>
	)
}

export default Copyright