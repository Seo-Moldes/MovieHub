import { useState } from "react";
import { ModalButton, ModalContainer, ModalContent, ModalStyles } from "./modal.styles";

export const Modal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(!modalIsOpen);
      }

  return (

    <ModalStyles>
      <button className="modal__btn-open" onClick={openModal}> Add </button>
      {modalIsOpen && (
        <ModalContainer>
          <ModalContent>
            <h2>Add Movie</h2>
            <form className="form__modal">
                <div className="form__modal-div">
                    <label className="form__modal-div-label" htmlFor="formModalName">Movie Name</label>
                    <input className="form__modal-div-input" type="text" id="formModalName" />
                </div>
                <div className="form__modal-div">
                    <label className="form__modal-div-label" htmlFor="formModalScore">Movie Score</label>
                    <input className="form__modal-div-input" type="text" id="formModalScore" />
                </div>
                <div className="form__modal-div">
                    <label className="form__modal-div-label" htmlFor="formModalGenre">Movie Genre</label>
                    <input className="form__modal-div-input" type="text" id="formModalGenre"/>
                </div>
                <div className="form__modal-div">
                    <label className="form__modal-div-label" htmlFor="formModalFile">Upload File</label>
                    <input className="form__modal-div-input" type="file" id="formModalFile"/>
                </div>
                <button className="form__modal-btnAddMovie" type="submit">Add Movie</button>
            </form>
            <ModalButton onClick={openModal}>Close Modal</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    

    </ModalStyles>
  )
}