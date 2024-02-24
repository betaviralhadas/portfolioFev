import React, {useEffect} from "react";
import data from '../components/Data.json';
import Modal from '../containers/Modal';
import ContentModal from "../containers/ContentModal";
import '../style/Components/_Cards.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Cards = () => {
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
        sliderInLeft(".card")
    }, [])
    return (
        <>
            <div className="cards">
                {data.map((project) => (
                    <Modal key={project.id} content={<ContentModal project={project} />}>
                        {({ setisOpened }) => (
                            <div className="card" key={project.id} onClick={() => setisOpened(true)}>
                                <img
                                    className="card_img"
                                    src={project.coverImage}
                                    alt="logo"
                                />
                                <div className="card_text">
                                    <h3 className="title">{project.title}</h3>
                                    <div className="hover_text">
                                        <span>Project</span>
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Modal>
                ))}
            </div>
        </>
    )
}
export default Cards;