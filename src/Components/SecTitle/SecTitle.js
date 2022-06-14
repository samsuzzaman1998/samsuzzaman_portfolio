import React from "react";

const SecTitle = (props) => {
    return (
        <div className="pb-16">
            <h5 className="heading_5 text-center font-semibold text-secondary">
                {props.titleName}
            </h5>
            <p className="heading_2 text-base-200 text-center font-bold">
                {props.titleDes}
            </p>
        </div>
    );
};

export default SecTitle;
