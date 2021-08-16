import './Section.css'

export function Section(props) {
    return(
        <div className={"sectionCont " + (props.className ? props.className : "")} style={{background: props.background}}>
            {props.children}
        </div>
    )
}

export function Block(props) {
    return(
        <div className={"sectionBlock " + (props.flex ? "sectionFlex " : "") }>
            {props.children}
        </div>
    )
}