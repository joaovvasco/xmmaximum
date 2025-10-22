import './SocialButton.css'

import whatsapp from '../../assets/social-media/whatsapp.svg'
import instagram from '../../assets/social-media/instagram.svg'
import youtube from '../../assets/social-media/youtube.svg'


interface ISocialMediaInfo{
    alt?: string,
    href?: string
}

interface ISocialMedia{
    image: string
}

const SocialButton: React.FC<ISocialMedia & ISocialMediaInfo & React.HTMLAttributes<HTMLElement>> = ({image, alt, href, style, id }) => {
    return <>
        <a id={id} href={href} target='_blank' className={'button'} style={style}>
            <img src={image} alt={alt} />
        </a>
    </>
}

interface IContact {
    contact: string
    name: string
}

interface IWhatsappMessage{
    message?: string
}

export const WhatsappButton:React.FC<IContact & IWhatsappMessage & React.HTMLAttributes<HTMLElement>> = ({ contact, name, message, id}) => {
    
    return <SocialButton
        id={id? id : "whatsapp"}
        image={whatsapp}
        href={`https://wa.me/${contact + (message ? `?text=${encodeURIComponent(message)}` : '')}`}
        alt={name}
    />
}

export const InstagramButton: React.FC<IContact & React.HTMLAttributes<HTMLElement>> = ({ contact, name, style, id}) => {
    return <SocialButton
        id={id? id : "instagram"}    
        image={instagram}
        href={`https://www.instagram.com/${contact}`}
        alt= {name}
        style={style}
    />
}

export const YoutubeButton: React.FC<IContact & React.HTMLAttributes<HTMLElement>> = ({ contact, name, style, id}) => {
    return <SocialButton
        id={id ? id : "youtube"}
        image={youtube}
        href={`https://www.youtube.com/${contact}`}
        alt= {name}
        style={style}
    />
}

