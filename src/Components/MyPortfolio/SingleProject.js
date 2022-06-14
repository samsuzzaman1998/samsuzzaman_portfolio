import React from "react";
import ProjectModal from "./ProjectModal";
import "./SingleProject.css";

const SingleProject = ({ project }) => {
    const { projectPhoto, projectName, projectDes, btnInfo } = project;

    return (
        <div className="project_card">
            <figure>
                <img src={projectPhoto} className="rounded" alt="project" />
            </figure>
            {/* <div className="service_icon text-center mb-6"></div> */}
            <h4 className="heading_4 text-center mb-3 mt-10 text-base-200 capitalize font-medium">
                {projectName}
            </h4>
            <p className="heading_6 text-center">{projectDes}</p>

            <div className="mt-3 btn_container flex justify-center ">
                <a
                    href={btnInfo.btnLink}
                    className="btn btn-xs bg-base-200 hover:bg-primary max-w-fit text-base-100 capitalize font-light text-xs rounded-full mr-2"
                >
                    {btnInfo.btnName}
                </a>
                <label
                    htmlFor="project_modal"
                    className="btn btn-xs bg-base-200 hover:bg-primary max-w-fit text-base-100 capitalize font-light text-xs rounded-full mr-2"
                >
                    show details
                </label>
                {/* ----------- */}
                <ProjectModal project={project} />
            </div>
        </div>
    );
};

export default SingleProject;
