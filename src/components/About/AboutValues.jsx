import AboutValuesItem from './AboutValuesItem.jsx'
import values from '../../data/values.json'

const AboutValues = () => {

	return (
		<section className="mb-10">
			<h1 className="text-3xl font-bold text-[var(--primary-color)] mb-8 text-center">Los valores que nos unen</h1>

			<div className="flex flex-wrap justify-center items-center gap-8">
			<AboutValuesItem values={values} />
		</div>
		</section>
	)
}

export default AboutValues