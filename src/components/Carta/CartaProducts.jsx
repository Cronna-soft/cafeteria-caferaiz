const CartaProducts = ({products}) => {

	return (
		<div className="flex flex-wrap justify-center gap-8 mx-auto pt-8 font-semibold text-gray-800">
			{products.map(({name, price, image}, index)=> (
				<div key={index} className="w-50 h-auto overflow-hidden text-center">	
					<img 
			 			src={`${image}?text=${name}`} 
			 			alt={name} 
			 			className="rounded-full h-40 w-40 object-cover mx-auto"
			 		/>
					<h4 className="text-xl">{name}</h4>
					<p className="text-md">${price.toLocaleString('es-CO')}</p>
				</div>
			))}
		</div>
	)
}

export default CartaProducts