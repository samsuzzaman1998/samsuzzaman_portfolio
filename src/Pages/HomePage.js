import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/ContactMe/Contact";
import Hero from "../Components/Hero/Hero";
import MyPortfolio from "../Components/MyPortfolio/MyPortfolio";
import MyServices from "../Components/MyServices/MyServices";
import MySkills from "../Components/MySkills/MySkills";
import Navbar from "../Components/Navbar/Navbar";
import Testing from "../Components/Testing";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Navbar />
            <MyServices />
            <AboutMe />
            <MySkills />
            <MyPortfolio />
            <Contact />
            <Testing />
        </>
    );
};

export default HomePage;
