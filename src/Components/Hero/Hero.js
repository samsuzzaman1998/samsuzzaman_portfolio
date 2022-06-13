import React from "react";

const Hero = () => {
    return (
        <section className="hero-wrapper sec_container">
            <div className="hero py-8 lg:py-20">
                <div className="hero-content w-full flex-col lg:flex-row-reverse justify-between">
                    <img
                        src="https://api.lorem.space/image/movie?w=260&h=400"
                        className="max-w-sm rounded-full lg:rounded-lg shadow-2xl"
                        alt="hero-text"
                    />
                    <div className="lg:max-w-lg mt-8">
                        <h3 className="heading_3 font-semibold text-secondary ">
                            Hi, I am
                        </h3>
                        <h1 className=" text-primary font-medium display_4 uppercase">
                            Samsuzzaman
                        </h1>
                        <p className="pb-6 font-light heading_5">
                            Front-end Web Developer
                        </p>
                        <div className="flex flex-col sm:flex-row">
                            <button className="btn btn-primary max-w-fit text-base-100 mb-4 sm-mb-0 sm:mr-2 rounded-full px-12">
                                resume
                            </button>
                            <button className="btn btn-outline btn-primary max-w-fit  rounded-full px-12">
                                connect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
