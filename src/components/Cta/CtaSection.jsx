import ctaImage from '../../assets/hero-image.png'

export const CtaSection = () => {

	return (
		<section id="ctaWpp" className="relative py-20 text-[var(--secundary-color)]">
			<div className="absolute inset-0">
				<img 
					src={ctaImage} //Imagen representativa del negocio
					alt="Café Raíz CTA WhatsApp" 
					className="w-full h-full object-cover blur-sm"
				/>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quieres reservar o tienes dudas?</h2>
        		
        		<p className="mb-8 text-lg italic">Escríbenos directamente por WhatsApp y te atenderemos con gusto.</p>

        		<a
		          href="#" //Url chat de WhatsApp
		          target="_blank"
		          rel="noopener noreferrer"
		          className="inline-flex items-center gap-3 bg-[var(--accent-color)] hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold text-lg transition"
		        >
					<i className="bi bi-whatsapp"></i> Hablar por WhatsApp
		        </a>
			</div>
		</section>
	)
}