import PropTypes from 'prop-types';

const ProjectsCard = ({ projInfo }) => {
    const { tittle, image, liveLink } = projInfo;
    return (
        <div className="border rounded">
            <img src={image} className="w-full h-64" />
            <div className="p-4 flex flex-col gap-3">
                <h2>{tittle}</h2>
                <a href={liveLink} target="_blank" className="px-4 py-2 bg-green-800 text-white font-bold border-green-400 rounded text-center">Live View</a>
            </div>
        </div>
    );
};

export default ProjectsCard;

ProjectsCard.propTypes = {
    projInfo: PropTypes.object
}