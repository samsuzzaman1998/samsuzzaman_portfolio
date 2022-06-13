import React from "react";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
    const H1 = `
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                neque alias provident? Praesentium, nisi temporibus numquam
                suscipit eligendi dignissimos ad, voluptatum omnis ex ipsa
                consequuntur ut, facilis expedita corrupti reiciendis!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                neque alias provident? Praesentium, nisi temporibus numquam
                suscipit eligendi dignissimos ad, voluptatum omnis ex ipsa
                consequuntur ut, facilis expedita corrupti reiciendis!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                neque alias provident? Praesentium, nisi temporibus numquam
                suscipit eligendi dignissimos ad, voluptatum omnis ex ipsa
                consequuntur ut, facilis expedita corrupti reiciendis!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                neque alias provident? Praesentium, nisi temporibus numquam
                suscipit eligendi dignissimos ad, voluptatum omnis ex ipsa
                consequuntur ut, facilis expedita corrupti reiciendis!
                
    `;
    return (
        <>
            <Hero />
            <Navbar />
            {/* <div className="mx-auto content">
                Bottom Content of Navbar
            </div> */}
            {/* <h1 className="display_1">{H1}</h1> */}
        </>
    );
};

export default HomePage;
