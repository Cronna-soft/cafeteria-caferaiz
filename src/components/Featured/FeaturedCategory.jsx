import { categories } from '../../data/categories.js'

const newCategories = categories.filter(c => c !== "brunch")
const FeaturedCategory = ({setFilter, filter}) => {

	return (
		<>
		 {newCategories.map((cat, index) => (
		 	<button 
		 		key={index}
		 		onClick={() => setFilter(cat)}
		 		className={`px-4 py-2 rounded-full text-sm font-medium capitalize hover:text-md hover:bg-[#d3b495] cursor-pointer transition ${
		 			filter === cat ? "rounded-full bg-[#d3b495]" : "text-[var(--primary-color)]"
		 		}`}
		 	>
		 		{cat}
		 	</button>
		 ))}
		</>
	)
}

export default FeaturedCategory