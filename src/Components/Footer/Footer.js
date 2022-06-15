import React from "react";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    // Social Links
    const socialItems = (
        <>
            <li className="capitalize font-light text-neutral text-xl ">
                <i class="fa-brands fa-facebook px-2 text-lg"></i>
            </li>
            <li className="capitalize font-light text-neutral text-xl ">
                <i class="fa-brands fa-twitter px-2 text-lg"></i>
            </li>
            <li className="capitalize font-light text-neutral text-xl">
                <i class="fa-brands fa-github px-2 text-lg"></i>
            </li>
        </>
    );

    return (
        <footer className=" bg-base-200 py-8">
            <div className="sec_container ">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <p className="heading_6 text-base-100 text-center">
                        Copyrights &copy; {year} Reserved by Samsuzzaman
                    </p>
                    <div>
                        <ul className="menu menu-horizontal p-0">
                            {socialItems}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
