import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Hero from "../Components/Hero/Hero";
import MyServices from "../Components/MyServices/MyServices";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Navbar />
            <MyServices />
            <AboutMe />
        </>
    );
};

export default HomePage;
