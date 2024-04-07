import React, { useState } from "react";
import PropType from "prop-types";
import '../style/containers/_FormModal.scss';

const FormModal = ({ opened, content, children }) => {
  const [isOpened, setisOpened] = useState(opened);

  const closeModal = () => {
    setisOpened(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Impede que o clique se propague para o fundo
  };

  return (
    <>
      {children({ isOpened, setisOpened })}
      {
        isOpened && (
          <div className="form_modal_overlay" onClick={closeModal}>
            <div className="modal_form" onClick={handleModalClick}>
              <button className="close_modal" onClick={closeModal}>X</button>
              {content}
            </div>
          </div>
        )
      }
    </>
  );
}
FormModal.defaultProps = { opened: false };
FormModal.PropType = {
  opened: PropType.bool,
  content: PropType.node.isRequired,
  children: PropType.func.isRequired
}
export default FormModal;