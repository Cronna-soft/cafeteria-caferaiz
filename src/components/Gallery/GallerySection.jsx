import GalleryItem from './GalleryItem.jsx'
import './gallery.css'
import { gallery } from '../../data/gallery.js'

export const GallerySection = () => {

	return (
		<section className="py-20 px-8 bg-[#d3b495]">
			
			<div className="max-w-6xl mx-auto">
				
				<div className="gallery-container gap-4 mx-auto pb-4">
					
					<GalleryItem gallery={gallery} />

				</div>

			</div>

		</section>
	)
}