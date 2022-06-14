import React, { useEffect, useState } from "react";
import SecTitle from "../SecTitle/SecTitle";
import SkillProgressbar from "./SkillProgressbar";

const MySkills = () => {
    const [mySkills, setMySkills] = useState([]);

    useEffect(() => {
        fetch("MySkill.json")
            .then((res) => res.json())
            .then((result) => setMySkills(result));
    }, []);

    return (
        <section className="sec_p sec_container">
            <SecTitle
                titleName="My-Skills"
                titleDes="That's the thing I've worked on"
            />

            {/* skills */}
            <div className="flex flex-col md:flex-row w-full justify-center align-middle">
                {mySkills.map((Skills) => {
                    return (
                        <div className="w-full" key={Skills._id}>
                            {Skills.skills.map((skill) => {
                                return (
                                    <SkillProgressbar
                                        key={skill._id}
                                        skill={skill}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MySkills;
