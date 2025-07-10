import FooterSite from './FooterSite/FooterSite.jsx'
import Copyright from './Copyright/Copyright.jsx'

export const Footer = () => {

	return (
		<div className="bg-[var(--accent-color)] py-6">
			{/*DATOS*/}
			<FooterSite />

			{/*COPYRIGHT*/}
			<Copyright />
		</div>
	)
}