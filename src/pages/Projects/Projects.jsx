import { useEffect, useState } from "react";
import ProjectsCard from "../../components/ProjectsCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div className="my-10" id="projects">
            <h2 className="text-center font-bold text-3xl text-gray-200">Projects</h2>
            <p className="text-center">Recently I have done this projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-5 p-5">
                {
                    projects.map(proj => <ProjectsCard key={proj.id} projInfo={proj}></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;