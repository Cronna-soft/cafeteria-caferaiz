import AboutHistory from '../../components/About/AboutHistory.jsx'
import AboutFilosofy from '../../components/About/AboutFilosofy.jsx'
import AboutValues from '../../components/About/AboutValues.jsx'
import logoImg from '../../assets/sticker-logo.png'

export const AboutPage = () => {

	return (
		<div className="h-screen md:flex">
			<div className="hidden md:flex flex-col items-center justify-center md:w-1/2 h-screen sticky top-0 bg-[var(--accent-color)] gap-8">
				<img 
					src={logoImg}
					alt="Logo Café Raíz" 
					className="w-50 h-50 object-cover drop-shadow-md"
				/>

				<h2 className="text-3xl text-[var(--secundary-color)] font-semibold text-center">Café Raíz <br/> Una Cafetería Artesanal</h2>
			</div>

			<div className="space-y-20 w-full md:w-1/2 h-full overflow-y-auto gap-20 px-8 py-10">
					
				{/*Seccion: Historia de la cafeteria*/}
				<AboutHistory />

				{/*Seccion: Filosofia de la cafeteria*/}
				<AboutFilosofy />

				{/*Seccion: Mapa del local*/}
				<AboutValues />
			</div>
		</div>
	)
}