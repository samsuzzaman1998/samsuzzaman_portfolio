import React from "react";
import Hero from "../Components/Hero/Hero";
import MyServices from "../Components/MyServices/MyServices";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Navbar />
            <MyServices />
        </>
    );
};

export default HomePage;
