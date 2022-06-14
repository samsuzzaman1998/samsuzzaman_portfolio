import React from "react";
import SecTitle from "../SecTitle/SecTitle";

const AboutMe = () => {
    return (
        <section className="sec_p sec_container">
            <SecTitle
                titleName="Who-am-I"
                titleDes="To know properly About Me"
            />

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row lg: justify-center">
                    <img
                        src="https://api.lorem.space/image/movie?w=260&h=400"
                        className="max-w-sm rounded-full lg:rounded-lg shadow-2xl lg:mr-10"
                        alt="aboutme"
                    />
                    <div className="mt-6 lg:mt-0">
                        <h1 className="heading_2 text-secondary font-medium">
                            Hello
                        </h1>
                        <p className="mt-3 mb-6 max-w-2xl heading_6 text-base-200">
                            My name is <strong>Samsuzzaman</strong>. I am from
                            kushtia, Bangladesh.Currently, I am studying
                            undergraduate(B.sc in EEE). I have been following
                            the path of web development since 2019 with the aim
                            of enhancing my skills as well as academic studies
                            and it is still going on. I am learning something
                            new every day and I enjoy learning something new.
                        </p>
                        {/* infos */}
                        <ul class="menu menu-vertical justify-between w-full md:menu-horizontal bg-base-100 rounded-box heading_6">
                            <div>
                                <li className="mb-2 md:mb-1 block">
                                    <span className="inline p-0 pr-1 font-semibold text-secondary">
                                        Name:
                                    </span>
                                    Samsuzzaman
                                </li>
                                <li className="mb-2 md:mb-1 block">
                                    <span className="inline p-0 pr-1 font-semibold text-secondary">
                                        Email:
                                    </span>{" "}
                                    dksamsuzzaman@gmail.com
                                </li>
                            </div>
                            <div>
                                <li className="mb-2 md:mb-1 block">
                                    <span className="inline p-0 pr-1 font-semibold text-secondary">
                                        Phone:
                                    </span>{" "}
                                    +8801708642294
                                </li>
                                <li className="mb-2 md:mb-1 block">
                                    <span className="inline p-0 pr-1 font-semibold text-secondary">
                                        Location:
                                    </span>{" "}
                                    Kushtia, Bangladeh
                                </li>
                            </div>
                        </ul>

                        <button className="btn btn-primary max-w-fit text-base-100 mb-4 sm-mb-0 sm:mr-2 rounded-full px-12 mt-6">
                            resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
