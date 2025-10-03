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

const SocialButton: React.FC<ISocialMedia & ISocialMediaInfo & React.HTMLAttributes<HTMLElement>> = ({image, alt, href, style }) => {
    return <>
        <a href={href} target='_blank' className={'button'} style={style}>
            <img src={image} alt={alt} />
        </a>
    </>
}

export const WhatsappButton:React.FC<ISocialMediaInfo & React.HTMLAttributes<HTMLElement>> = ({ href, alt}) => {
    return <SocialButton
        image={whatsapp}
        href={href}
        alt={alt}
    />
}

export const InstagramButton: React.FC<ISocialMediaInfo & React.HTMLAttributes<HTMLElement>> = ({ href, alt, style}) => {
    return <SocialButton
        image={instagram}
        href={href}
        alt= {alt}
        style={style}
    />
}

export const YoutubeButton: React.FC<ISocialMediaInfo & React.HTMLAttributes<HTMLElement>> = ({ href, alt, style}) => {
    return <SocialButton
        image={youtube}
        href={href}
        alt= {alt}
        style={style}
    />
}

