import React, { useEffect, useState } from "react";
import SecTitle from "../SecTitle/SecTitle";
import SingleQuestion from "./SingleQuestion";

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch("FAQ.json")
            .then((res) => res.json())
            .then((result) => setFaqs(result));
    }, []);
    return (
        <section className="sec_p sec_container">
            <SecTitle
                titleName="FAQ"
                titleDes="The main questions that clients have"
            />

            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="w-full md:w-3/6 mt-8 md:mt-0">
                    <h3 className="heading_5 md:heading_3 font-medium text-secondary capitalize">
                        Frequently Asked Questions:
                    </h3>

                    <div className="mt-4 md:mt-8">
                        {faqs.map((faq) => {
                            return <SingleQuestion key={faq._id} faq={faq} />;
                        })}
                    </div>
                </div>

                <div className="w-3/4 md:w-2/5">
                    <img
                        src="https://i.ibb.co/f05YWvT/Faq.jpg"
                        className="w-full rounded-md"
                        alt="faq"
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
