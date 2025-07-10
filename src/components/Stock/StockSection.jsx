import StockItems from './StockItems.jsx'
import stockProducts from '../../data/stockProducts.json'

export const StockSection = () => {

	return (
		<section className="mt-[-70px] pb-20 sm:mt-auto md:py-15 px-10 md:px-0">
				
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row flex-wrap justify-around items-center gap-8">
				
				<StockItems stock={stockProducts} />

			</div>

		</section>
	)
}