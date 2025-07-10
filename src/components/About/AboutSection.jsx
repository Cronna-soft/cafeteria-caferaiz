import AboutData from './AboutData.jsx'
import AboutCta from './AboutCta.jsx'
import './about.css'

export const AboutSection = () => {

	return (
		<section className="h-screen md:h-auto lg:bg-gradient-to-r from-[var(--primary-color)] from-50% to-[#d3b495] to-50%">
			
			<div className="max-w-7xl mx-auto about-contain">
				<AboutData />
				
				<AboutCta />
			</div>

		</section>
	)
}