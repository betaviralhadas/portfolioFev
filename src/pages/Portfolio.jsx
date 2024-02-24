import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Animator, Move, ScrollContainer, ScrollPage } from "react-scroll-motion";
import { Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, batch } from "react-scroll-motion";
import { Link, animateScroll as scroll } from "react-scroll";
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
                delay: delay || 1.8,
                duration: duration || 0.6,
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

   // Adicionar animação "pop-up" aos títulos h2
   /* useEffect(() => {
        gsap.from(".titles", {
            opacity: 0.8,
            scale: 1.5,
            duration: 0.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".titles",
                start: "top 90%", // Ajuste a porcentagem conforme necessário
            },
        });
    }, []);*/

    useEffect(() => {
        sliderInTop("#top")
    }, [])

    useEffect(() => {
        sliderInLeft(".projects")
    }, [])

    const Fadeup = batch(Fade(), Sticky(), Move())

    

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