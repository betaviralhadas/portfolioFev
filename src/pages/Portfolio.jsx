import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";
import { Fade, MoveOut, Sticky, batch } from "react-scroll-motion";
import '../style/Page/_Portfolio.scss';
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Form from "../components/Form";
import FormModal from "../containers/FormModal";
import Slider from "../components/Slider";

const Portfolio = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    const sliderInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            y: -200,
        },
            {
                opacity: 1,
                y: 0,
                delay: delay || 1,
                duration: duration || 0.3,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }
    const sliderInLeft = (elem, delay, duration) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            x: -200,
        },
            {
                opacity: 1,
                x: 0,
                delay: delay || 0.2,
                duration: duration || 0.5,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                },
                rotate: 360,
            }
        )
    }

    useEffect(() => {
        sliderInTop("#top")
    }, [])

    useEffect(() => {
        sliderInLeft(".projects")
    }, [])

    const Fadeup = batch(Fade(), Sticky(), MoveOut(0, -200))

    return (
        <>
            <ScrollContainer>
                <section id="top">
                    {<Banner />}
                </section>
                <main>
                    <div id="about_me"></div>
                    <section>
                        <ScrollPage page={1}>
                            <Animator animation={Fadeup}>
                                {<AboutMe />}
                            </Animator>
                        </ScrollPage >
                    </section>
                    <div id="skills"></div>
                    <section className="skill_content">
                        <h2 className='skills_title titles'>Skills</h2>
                        {<Slider />}
                    </section>
                    <div id="projects"></div>
                    <section id="project">
                        <h2 className="title_projects titles">Projects</h2>
                        {<Cards />}
                    </section>
                    <div id="contact"></div>
                    <FormModal
                        content={
                            <section className="message_sent">
                                <h3>Message sent</h3>
                                <i class="fa-regular fa-circle-check"></i>
                            </section>
                        }>
                        {({ setisOpened }) => (
                            <Form onSuccess={() => setisOpened(true)} />)}
                    </FormModal>
                </main>
            </ScrollContainer>
        </>
    )
}
export default Portfolio;