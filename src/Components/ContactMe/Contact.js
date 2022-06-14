import React from "react";
import "./contact.css";
import SecTitle from "../SecTitle/SecTitle";
import Slider from "react-slick";

const Contact = () => {
    return (
        <section className="sec_p sec_container">
            <SecTitle titleName="contact" titleDes="To get in touch with me" />

            {/* main */}
            <div className="container_row flex justify-center">
                <div className="contact_form w-11/12 max-w-xl">
                    <div className="form_container w-full mt-8 form_shadow">
                        <form className="w-full">
                            {/* Input_Field */}
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text">
                                        Your Name:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
                                    <span className="label-text-alt">
                                        For error message
                                    </span>
                                </label>
                            </div>

                            {/* Input_Field */}
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text">
                                        Your Email:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g: demo@gmail.com"
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
                                    <span className="label-text-alt">
                                        For error message
                                    </span>
                                </label>
                            </div>

                            {/* Input_Field */}
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text">
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered w-full "
                                />
                                <label className="label">
                                    <span className="label-text-alt">
                                        For error message
                                    </span>
                                </label>
                            </div>

                            <div className="flex justify-center mt-2">
                                <button className="btn btn-primary max-w-fit text-base-100 mb-4 sm-mb-0 sm:mr-2 rounded-full px-12">
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
