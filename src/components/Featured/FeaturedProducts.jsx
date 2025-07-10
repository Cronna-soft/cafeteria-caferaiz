import { motion } from "motion/react"

const FeaturedProducts = ({products}) => {

	return (
		<>
		 {products.map(({name, price, image}, index) => (
		 	<motion.div
		 		key={index}
		 		whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.98 }}
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }} 
		 		className="rounded-lg shadow-md overflow-hidden"
		 	>
		 		<img 
		 			src={`${image}?text=${name}`} 
		 			alt={name} 
		 			className="w-full h-60 object-cover"
		 		/>

		 		<div className="p-4 italic">
		 			<h3 className="text-lg font-semibold text-gray-800">{name}</h3>
		 			<p className="text-[var(--primary-color)] font-bold mt-2">${price.toLocaleString('es-CO')}</p>
		 		</div>
		 	</motion.div>
		 ))}
		</>
	)
}

export default FeaturedProducts