import CartaHero from '../../components/Carta/CartaHero.jsx'
import CartaCategories from '../../components/Carta/CartaCategories.jsx'
import CartaProducts from '../../components/Carta/CartaProducts.jsx'
import { categories } from '../../data/categories.js'
import products from '../../data/products.json'

const newCategories = categories.filter(c => c !== "todos")

export const CartaPage = () => {

	return (
		<section>
			
			<CartaHero />

			<div className="max-w-7xl mx-auto my-20">
				{Object.entries(newCategories).map(([index, nombre]) => {
					const filteredProducts = products.filter(p => p.category === nombre)

					return (
						<div key={index} className="mx-auto mb-20">
							<CartaCategories nombre={nombre} />

							<CartaProducts products={filteredProducts} />
						</div>
					)
				})}
			</div>

		</section>
	)
}