import SocialItems from './SocialItems.jsx'
import socialLinks from '../../data/socialLinks.json'

export const SocialList = () => {

	return (
	 <div className="hidden md:flex gap-2">
		{socialLinks.map((media, index) => (
			<SocialItems key={index} social={media} />
		))}
	 </div>
	)
}