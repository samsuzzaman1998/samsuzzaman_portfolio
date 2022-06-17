import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Components/Navbar/Navbar";
import MyServices from "../Components/MyServices/MyServices";
import ForAnimation from "../Components/ForAnimation/ForAnimation";
import Hero from "../Components/Hero/Hero";

// For Animation ==============
const variantsSection = {
    start: { opacity: 0, x: "-100vw" },
    end: { opacity: 1, x: 0, transition: { type: "spring", duration: 3 } },
};
const variantsSection2 = {
    start: { opacity: 0, x: "-100vw" },
    end: { opacity: 1, x: 0, transition: { type: "spring", duration: 3 } },
};

const AnimationPage = () => {
    return (
        <>
            <ForAnimation>
                <Hero />
                <Navbar />
            </ForAnimation>
            <ForAnimation>
                <MyServices />
            </ForAnimation>
            <ForAnimation>
                <MyServices />
            </ForAnimation>
            <ForAnimation>
                <MyServices />
            </ForAnimation>
            <ForAnimation>
                <MyServices />
            </ForAnimation>
            <ForAnimation>
                <MyServices />
            </ForAnimation>
            <ForAnimation>
                <MyServices />
            </ForAnimation>
        </>
    );
};

export default AnimationPage;
