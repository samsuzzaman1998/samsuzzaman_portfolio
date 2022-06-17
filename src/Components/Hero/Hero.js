import React from "react";
import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="hero-wrapper  bg-primary">
            <div className="sec_container">
                <div className="hero">
                    <div className="hero-content w-full flex-col justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                        >
                            <img
                                src="https://api.lorem.space/image/movie?w=300&h=300"
                                className=" w-72 rounded-full lg:rounded-full shadow-2xl"
                                alt="hero-text"
                            />
                        </motion.div>
                        <div className="lg:max-w-lg">
                            <h3 className="heading_3 font-semibold text-base-100 ">
                                Hi, I am
                            </h3>
                            <h1 className=" text-base-100 font-medium display_4 uppercase">
                                Samsuzzaman
                            </h1>
                            <p className="pb-6 font-light heading_5 text-base-100">
                                Front-end Web Developer
                            </p>
                            <div className="flex flex-col sm:flex-row">
                                <button className="btn btn-base-100 bg-base-100 text-primary hover:bg-base-200 hover:text-base-100 max-w-fit mb-4 sm-mb-0 sm:mr-2 rounded-full px-12">
                                    resume
                                </button>
                                <button className="btn btn-outline text-base-100 hover:bg-base-200 btn-base-100 max-w-fit  rounded-full px-12">
                                    connect
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
