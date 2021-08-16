import './SocialLinks.css'

export default function SocialLinks(props) {
    return( 
        <div className={"SocialLinksCont " + (props.headerLinks ? "headerLinks" : "")} style={{color: props.color, width: props.width}}>
            {props.children}
        </div>
    )
}