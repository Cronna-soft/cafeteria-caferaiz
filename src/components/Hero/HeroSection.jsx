import HeroText from './HeroText.jsx'
import imgHero from '../../assets/hero-image.png'

export const HeroSection = () => {

	return (
		<section className="relative overflow-hidden py-20 min-h-[80vh]">
			{/*Imagen de fondo*/}
			<div className="absolute inset-0">
				<img 
					src={imgHero}
					alt="Imagen Hero" 
					className="w-full h-full object-cover"
				/>
 				<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
			</div>

			<div className="relative z-10 top-40 md:top-70 md:px-20 px-10">
				<HeroText />
			</div>
		</section>
	)
}