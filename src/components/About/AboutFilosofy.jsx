const AboutFilosofy = () => {

	return (
		<section className="grid md:grid-rows-2 xl:grid-cols-2 gap-12 mb-2">
			<div className="mx-auto">
				<h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4 text-center">Nuestra filosofía</h1>

				<img 
					src="https://placehold.jp/4e342e/fbe9e7/500x500.png" 
					alt="Imagen 1" 
					className="w-60 h-60 object-cover rounded-xl"
				/>
			</div>
			<p className="xl:text-lg md:text-md text-left mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, laudantium, accusantium, adipisci explicabo voluptate necessitatibus obcaecati omnis aliquid fugiat quos quae! Asperiores dolorum earum magni quidem quisquam nemo, tenetur officia labore, minus et nobis, illum libero. Vel, quo incidunt itaque.
			</p>
		</section>
	)
}

export default AboutFilosofy