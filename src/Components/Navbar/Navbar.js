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
    return (
        <nav className={`navbar-wrapper `} ref={navbarRef}>
            <div id="navbar" className={`${scrollValue ? "sticky-nav" : ""}`}>
                {/* navbar content goes here */}
            </div>
        </nav>
    );
};

export default Navbar;
