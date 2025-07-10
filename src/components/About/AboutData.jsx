import { Link } from 'react-router'

import stickerImg from '../../assets/sticker-logo.png'

const AboutData = () => {

	return (
		<>
			<div id="about" className="about-item bg-[var(--primary-color)] flex justify-center flex-col gap-8 px-4 md:px-20 lg:px-4 py-10 text-center md:text-left">
				<h2 className="text-4xl lg:text-2xl xl:text-4xl font-bold text-[var(--secundary-color)] mb-6">Sobre nosotros</h2>

				<p className="text-[var(--secundary-color)] leading-relaxed text-lg lg:text-md xl:text-lg">
					Lorem ipsum <strong className="text-[var(--accent-color)] text-2xl lg:text-xl xl:text-2xl">Café Raíz</strong> dolor sit amet consectetur adipisicing elit. Quidem quasi quia ut aperiam praesentium deserunt totam dolor tempora repellat libero aut numquam at, nisi omnis! Veritatis debitis libero expedita dolores.
				</p>

				<Link to="/nosotros"
					className="bg-[var(--accent-color)] text-center text-sm text-[var(--secundary-color)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--secundary-color)] hover:text-[var(--primary-color)] transition duration-300"
				>
				Conócenos Más
				</Link>
			</div>		

			<div className="about-item hidden p-4 lg:flex items-center">
				<img 
					src={stickerImg} 
					alt="Logo marca" 
					className="w-auto h-auto hover:rounded-lg object-cover hover:scale-120 transition-transform duration-300"
					title="Café Raíz"
				/>
			</div>		
		</>
	)
}

export default AboutData