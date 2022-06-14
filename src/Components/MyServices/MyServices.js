import React, { useEffect, useState } from "react";
import SecTitle from "../SecTitle/SecTitle";
import Service from "../Service/Service";

const MyServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("MyServices.json")
            .then((res) => res.json())
            .then((result) => {
                setServices(result);
            });
    }, []);

    return (
        <section className="sec_p sec_container">
            <SecTitle
                titleName="What-I-Do"
                titleDes="Top offers for my Clients"
            />

            <div className="sec_grid_row">
                {services.map((service) => {
                    return <Service key={service._id} service={service} />;
                })}
            </div>
        </section>
    );
};

export default MyServices;
