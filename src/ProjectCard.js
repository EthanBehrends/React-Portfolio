import './ProjectCard.css'

export default function ProjectCard(props) {
    return (
        <div className="ProjectCard">
            <div className="ProjectCardImage" image={props.project.image}>
                <img src={props.project.image} />
            </div>
            <div className="ProjectCardHeader">
                {props.project.title}
            </div>
            <div className="ProjectCardSkills">
                Built With: React.js | Socket.io | MongoDB | Express
            </div>
            <div className="ProjectCardBody">
                {props.project.desc}
            </div>
            <div className="ProjectCardButtons">
                <div className="ProjectCardButton">
                    View Repo
                </div>
                <div className="ProjectCardMainButton">
                    Live Demo
                </div>
            </div>
        </div>
    )
}