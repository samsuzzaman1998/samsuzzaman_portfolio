import React from "react";

const ProjectModal = ({ project }) => {
    const { projectPhoto, projectName, projectDes, sources, usedTec } = project;

    return (
        <>
            <input
                type="checkbox"
                id="project_modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-11/12 md:max-w-5xl px-2 pt-4">
                    <div className="w-9/12 max-w-lg mx-auto">
                        <img
                            className="rounded"
                            src={projectPhoto}
                            alt={projectName}
                        />
                    </div>

                    <div className="mt-8">
                        <h4 className="heading_3 mb-3 font-semibold text-center capitalize text-secondary">
                            {projectName}
                        </h4>
                        <p className="heading_6 px-2 sm:w-9/12 max-w-2xl mx-auto text-center">
                            {projectDes}
                        </p>
                        <div className="mt-3 btn_container flex justify-center ">
                            {sources.map((Button) => {
                                const { btnName, btnLink } = Button;
                                return (
                                    <a
                                        key={Button._id}
                                        href={btnLink}
                                        className="btn btn-xs bg-base-200 hover:bg-primary max-w-fit text-base-100 capitalize font-light text-xs rounded-full mr-2"
                                    >
                                        {btnName}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="text-center mt-12 flex flex-col sm:flex-row  justify-center items-center">
                        <h6 className="heading_4 mr-3 font-medium text-secondary">
                            Used Technologies:
                        </h6>
                        <ul className="flex justify-center">
                            {usedTec?.map((tech, i) => {
                                return (
                                    <span
                                        key={i + i}
                                        className="btn btn-xs bg-secondary hover:bg-accent max-w-fit text-base-100 capitalize font-light text-xs rounded-full mr-2"
                                    >
                                        {tech}
                                    </span>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Close Button */}
                    <div className="modal-action top-0 right-0">
                        <label
                            htmlFor="project_modal"
                            className="btn btn-circle btn-sm bg-neutral hover:bg-neutral text-red-500 text-base"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
