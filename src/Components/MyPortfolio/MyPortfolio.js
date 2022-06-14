import React, { useEffect, useState } from "react";
import SecTitle from "../SecTitle/SecTitle";
import SingleProject from "./SingleProject";

const MyPortfolio = () => {
    const [projects, setPorjects] = useState([]);

    useEffect(() => {
        fetch("MyProjects.json")
            .then((res) => res.json())
            .then((result) => setPorjects(result));
    }, []);

    return (
        <section className="sec_p sec_container">
            <SecTitle
                titleName="Portfolio"
                titleDes="Some recent projects that I've worked on"
            />

            <div className="sec_grid_row">
                {projects.map((project) => {
                    return (
                        <SingleProject key={project._id} project={project} />
                    );
                })}
            </div>
        </section>
    );
};

export default MyPortfolio;
