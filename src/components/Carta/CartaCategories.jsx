const CartaCategories = ({nombre}) => {

	return (
		<img 
			src={`https://placehold.jp/4e342e/fbe9e7/750x750.png?text=${nombre.toUpperCase()}`} 
			alt={nombre} 
			className="w-full h-80 object-cover" 
		/>
	)
}

export default CartaCategories