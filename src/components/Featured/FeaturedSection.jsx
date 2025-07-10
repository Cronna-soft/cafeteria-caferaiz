import { useState } from 'react'
import FeaturedCategory from './FeaturedCategory.jsx'
import FeaturedProducts from './FeaturedProducts.jsx'
import products from '../../data/featuredProducts.json'

export const FeaturedSection = () => {
	const [filter, setFilter] = useState("todos")

	const visibleCount = 3 //Número de imagenes/productos en vista

	const filteredProducts = filter === "todos" ? products : products.filter(p => p.category === filter)

	const filtered = filteredProducts.slice(0, visibleCount)

	return (
		<section className="bg-[var(--secundary-color)] py-16 px-4" id="carta">

			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center text-[var(--primary-color)] mb-8">Nuestra Carta Destacada</h2>
				
				{/*Filtro de categorias*/}
				<div className="flex justify-center gap-4 mb-10 flex-wrap">
					<FeaturedCategory setFilter={setFilter} filter={filter} />
				</div>

				{/*Productos*/}
				<div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 px-10">
					<FeaturedProducts products={filtered} />
				</div>
			</div>

		</section>
	)
}