const AboutValuesItem = ({values}) => {

	return (
		<>
		 {values.map(({image, value, description}, index) => (
		 	<div key={index} className="relative mx-auto values-contain text-center rounded-lg cursor-crosshair">
			 	<img  
			 		src={`${image}?text=${value}`} 
			 		alt={`Modelo de ${value}`} 
			 		className="w-80 h-65 object-cover transition duration-300"
		 		/>
		 		
		 		<div className="values-overlay absolute opacity-0 text-[var(--accent-color)]">
		 			<p className="text-3xl font-bold">{value}</p>
		 			
		 			<p className="text-xl font-semibold">{description}</p>
		 		</div>
		 	</div>
		 ))}
		</>
	)
}

export default AboutValuesItem