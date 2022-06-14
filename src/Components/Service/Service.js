import React from "react";
import "./service.css";

const Service = ({ service }) => {
    const { serviceName, icon, serviceDes } = service;
    return (
        <div className="service_card">
            <div className="service_icon text-center mb-6">
                <i className={`text-accent display_3  ${icon}`}></i>
            </div>
            <h4 className="heading_4 text-center mb-4 text-base-200 capitalize font-medium">
                {serviceName}
            </h4>
            <p className="heading_6 text-center">{serviceDes}</p>
        </div>
    );
};

export default Service;
