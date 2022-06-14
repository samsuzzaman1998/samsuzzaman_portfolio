import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [scrollValue, setScrollValue] = useState(false);
    const navbarRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", handleScrollFun);
        return () => {
            window.removeEventListener("scroll", handleScrollFun);
        };
    }, []);

    const handleScrollFun = (e) => {
        // finding the height of section just top of navbar by using offset value of navbar from top
        let stickyValue = navbarRef.current.offsetTop;
        if (window.pageYOffset >= stickyValue) {
            setScrollValue(true);
        } else {
            setScrollValue(false);
        }
    };

    const menuItems = (
        <>
            <li className="capitalize font-light text-neutral text-xl mb-3 lg:mb-0 lg:mr-4">
                item1
            </li>
            <li className="capitalize font-light text-neutral text-xl mb-3 lg:mb-0 lg:mr-4">
                item1
            </li>
            <li className="capitalize font-light text-neutral text-xl">
                item1
            </li>
        </>
    );
    return (
        <nav className={`navbar-wrapper z-50 `} ref={navbarRef}>
            <div id="navbar" className={`${scrollValue ? "sticky-nav" : ""}`}>
                {/* navbar content goes here */}
                <div className="navbar bg-primary text-base-100 lg:px-16 px-6">
                    <div className="navbar-start">
                        {/* <Link
                    to="/"
                    className="uppercase text-xl sm:text-4xl text-neutral font-semibold tracking-wider "
                >
                    kit-shop
                </Link> */}
                        <a
                            href="/"
                            className=" s_brand uppercase heading_2 font-bold text-base-100 tracking-wider "
                        >
                            S
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end block lg:hidden">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-2 sm:mt-2 p-2 shadow w-60 bg-primary"
                            >
                                {menuItems}
                                {/* {userInfo} */}
                            </ul>
                        </div>
                        {/* large menu */}
                        <ul className="menu menu-horizontal p-0 hidden lg:flex ">
                            {menuItems}
                            {/* {userInfo} */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
