const GalleryItem = ({gallery}) => {

	return (
		<>
		 {gallery.map((gallery, index) => (
		 	<div key={index} 
		 		className={`w-full h-auto gallery-item-${index+1} overflow-hidden rounded-lg shadow-md`}
		 	>
		 		<img 
		 			src={`${gallery}?text=Imagen+${index + 1}`} 
		 			alt={`Imagen ${index + 1}`}
		 			className="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
		 		/>
		 	</div>
		 ))}
		</>
	)
}

export default GalleryItem