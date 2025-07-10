import { motion } from 'motion/react'

const StockItems = ({stock}) => {

	return (
		<>
		 {stock.map(({name, image}, index) => (
			 	<motion.div key={index}
			 		whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.98 }}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
			 		className="font-bold text-center"
			 	>
			 		<img 
			 			src={`${image}?text=${name}`} 
			 			alt={name} 
			 			className="rounded-full h-40 w-40 object-cover mx-auto"
			 		/>

			 		<h4 className="text-xl text-gray-800">{name}</h4>
			 	</motion.div>
		 ))}
		</>
	)
}

export default StockItems