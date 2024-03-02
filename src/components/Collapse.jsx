import React, { useState } from 'react';
import '../style/Components/_Collapse.scss';
import { Animator, Move, ScrollContainer, ScrollPage } from "react-scroll-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, batch } from "react-scroll-motion";

//const Fadeup = batch(Fade(), Sticky(), Move())

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    //<ScrollPage page={1}>
     // <Animator animation={Fadeup}>
        <div className="collapse">
          <div className="collapse-header" onClick={toggleCollapse}>
            <span style={{ marginTop: isOpen ? '165px' : '0' }}>{title}</span>
            <span style={{ display: isOpen ? 'none' : 'block' }} className={` ${isOpen ? 'open' : 'closed'}`}><i className="fa-solid fa-chevron-up arrow"></i></span>

            {window.innerWidth <= 767 && isOpen && (
              <div className='collapse_header_mobile'>
                <span style={{ marginTop: isOpen ? '0' : '0' }}>{title}</span>
                <span style={{ display: isOpen ? 'block' : 'block' }} className={` ${isOpen ? 'open' : 'closed'}`}><i className="fa-solid fa-chevron-up arrow"></i></span>
              </div>
            )}
          </div>
          {isOpen && <div className="collapse-content">{description}</div>}
        </div>
     // </Animator>
   // </ScrollPage >
  );
};
export default Collapse;