import React from "react";

const SingleQuestion = ({ faq }) => {
    const { Question, Answer } = faq;
    return (
        <div
            tabIndex="0"
            className="collapse collapse-plus light_shadow rounded mb-4"
        >
            <div className="collapse-title heading_6 font-medium">
                {Question}
            </div>
            <div className="collapse-content">
                <p className="heading_6">{Answer}</p>
            </div>
        </div>
    );
};

export default SingleQuestion;
