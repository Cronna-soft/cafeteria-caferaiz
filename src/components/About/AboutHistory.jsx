const AboutHistory = () => {

	return (
		<section className="grid md:grid-rows-2 xl:grid-cols-2 gap-12 mb-2">
			<div className="mx-auto">
				<h1 className="text-3xl font-bold text-[var(--primary-color)] text-center">Nuestra historia</h1>

				<img 
					src="https://placehold.jp/4e342e/fbe9e7/500x500.png" 
					alt="Imagen 1" 
					className="w-60 h-60 object-cover rounded-xl"
				/>
			</div>
			<p className="xl:text-lg md:text-md text-left mx-auto">Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ad saepe, maiores adipisci blanditiis porro, molestias nesciunt rerum aut error debitis tempore id molestiae non iusto soluta veniam. Cum fuga odio, animi blanditiis officia ut illo esse debitis, itaque impedit necessitatibus aperiam quidem quia, omnis iusto, architecto sunt sequi tempore.
			</p>
		</section>
	)
}

export default AboutHistory