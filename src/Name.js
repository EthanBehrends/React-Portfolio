import './Name.css'

export default function Name(props) {
    return(
        <div className="nameCont">
            <div className="nameName">{props.name}</div>
            <div style={{flexBasis: "100%"}} />
            <div className="nameTitle">{props.title}</div>
        </div>
    )
}