import PropType from "prop-types";
import '../style/containers/_ContentModal.scss';

const ContentModal = ({ project }) => {
    return (
        <div className="modal_content">
            <div className="modal_image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="modal_description">
                <h2>Description</h2>
                <div className="description_text">
                    {project.description}<br></br>{project.languages}
                </div>
                <button className="button_github" onClick={() => window.open(project.gitHubLink, "_blank")}>
                    See the code
                </button>
            </div>
        </div>
    )
}
ContentModal.PropType = {
    project: PropType.any.isRequired
}
export default ContentModal;