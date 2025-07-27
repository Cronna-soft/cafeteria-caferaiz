import { Link } from 'react-router'

const HeroText = () => {

	return (
		<div className="text-center md:text-left">
			<h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--primary-color)] leading-left drop-shadow-md">
				Café Raíz
			</h1>

			<p className="text-2xl mb-8 text-amber-100 max-w-md mx-auto md:mx-0">
				Desde la tierra, directo a tu alma.
			</p>

			<div className="flex justify-center md:justify-start gap-4">
				<a href="#"
					className="bg-[var(--secundary-color)] text-center text-sm text-[var(--primary-color)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--primary-color)] hover:text-[var(--secundary-color)] transition duration-300"
				>
					Conócenos
				</a>

				<Link to="/carta"
					className="bg-[var(--primary-color)] text-center text-sm text-[var(--secundary-color)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--secundary-color)] hover:text-[var(--primary-color)] transition duration-300"
				>
					Explorar nuestra carta
				</Link>	
			</div>
		</div>
	)
}

export default HeroText