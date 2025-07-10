const CartaHero = () => { 

	return (
		<div className="relative overflow-hidden h-[40vh]">
			<div className="absolute inset-0">
				<img 
					src="https://placehold.jp/d3b495/fff/750x750.png?text=Nuestra+Carta" 
					alt="" 
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="relative z-10 md:top-1/2">
				<h2 className="text-7xl font-bold text-center text-[var(--primary-color)]">Nuestra Carta</h2>
			</div>
		</div>
	)
}

export default CartaHero