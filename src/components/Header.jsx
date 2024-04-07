import React, { useState, useEffect } from "react";
import profilePhoto from "../Img/beta.webp";
import '../style/Components/_Header.scss';
import { gsap } from "gsap";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => { //para fechar menu ao clicar no item
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const closeMenuOnOutsideClick = (e) => {
            if (isMobileMenuOpen && !e.target.closest('.header')) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("click", closeMenuOnOutsideClick);

        return () => {
            window.removeEventListener("click", closeMenuOnOutsideClick);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 767) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const onLoad = () => {
        gsap.timeline().fromTo(".letter",
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                delay: 0.1,
                stagger: 0.1,
            }
        )
            .to(".letter", {
                margin: "0.7 vw",
                delay: 0.1,
                duration: 0.2,
            })
    }

    useEffect(() => {
        onLoad()
    }, [])

    return (
        <section className="header">
            <div className="name_photo">
                <img
                    className="profile_photo"
                    src={profilePhoto}
                    alt="elisabeteViralhadas"
                />
                <h1 className="title">
                    <span className="letter">E</span>
                    <span className="letter">l</span>
                    <span className="letter">i</span>
                    <span className="letter">s</span>
                    <span className="letter">a</span>
                    <span className="letter">b</span>
                    <span className="letter">e</span>
                    <span className="letter">t</span>
                    <span className="letter">e </span>
                    <span className="letter">V</span>
                    <span className="letter">i</span>
                    <span className="letter">r</span>
                    <span className="letter">a</span>
                    <span className="letter">l</span>
                    <span className="letter">h</span>
                    <span className="letter">a</span>
                    <span className="letter">d</span>
                    <span className="letter">a</span>
                    <span className="letter">s</span>
                </h1>
            </div>
            <nav className={`navigation ${isMobileMenuOpen ? '' : ''}`}>
                {window.innerWidth <= 767 && (
                    <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                        <i className="fa-solid fa-bars bars"></i>
                    </div>
                )}
                {window.innerWidth <= 767 && isMobileMenuOpen && (
                    <ul className={`nav_ul ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li><a href="#about_me" title="about" onClick={closeMobileMenu}>About</a></li>
                        <li><a href="#skills" title="skills" onClick={closeMobileMenu}>Skills</a></li>
                        <li><a href="#projects" title="projects" onClick={closeMobileMenu}>Projects</a></li>
                        <li><a href="#contact" title="contact" onClick={closeMobileMenu}>Contact</a></li>
                    </ul>
                )}
                {window.innerWidth > 767 && !isMobileMenuOpen && (
                    <ul className={`nav_ul ${isMobileMenuOpen ? '' : ''}`}>
                        <li><a href="#about_me" title="about">About</a></li>
                        <li><a href="#skills" title="skills">Skills</a></li>
                        <li><a href="#projects" title="projects">Projects</a></li>
                        <li><a href="#contact" title="contact">Contact</a></li>
                    </ul>
                )}
            </nav>
        </section>
    )
}
export default Header;