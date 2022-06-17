import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/ContactMe/Contact";
import FAQ from "../Components/FAQ/FAQ";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import MyPortfolio from "../Components/MyPortfolio/MyPortfolio";
import MyServices from "../Components/MyServices/MyServices";
import MySkills from "../Components/MySkills/MySkills";
import Navbar from "../Components/Navbar/Navbar";
import ForAnimation from "../Components/ForAnimation/ForAnimation";

const HomePage = () => {
    return (
        <>
            <ForAnimation>
                <Hero />
                <Navbar />
            </ForAnimation>
            <ForAnimation>
                {" "}
                <MyServices />
            </ForAnimation>
            <ForAnimation>
                {" "}
                <AboutMe />
            </ForAnimation>
            <ForAnimation>
                <MySkills />
            </ForAnimation>
            <ForAnimation>
                <MyPortfolio />
            </ForAnimation>
            <ForAnimation>
                <Contact />
            </ForAnimation>
            <ForAnimation>
                {" "}
                <FAQ />
            </ForAnimation>
            <ForAnimation>
                <Footer />
            </ForAnimation>
        </>
    );
};

export default HomePage;
