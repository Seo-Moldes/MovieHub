import { useState } from "react";
import { ModalButton, ModalContainer, ModalContent, ModalStyles } from "./modal.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { createMovie } from "../../api/createMovie";


export const Modal = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const {register, handleSubmit} = useForm();

const onsubmit = handleSubmit( (data: any) => {

  const url = `http://localhost:3000/movies/${user?.email}`;
  
  createMovie(url, data, getAccessTokenSilently)
  
})

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (

    <ModalStyles>
      {isAuthenticated && (<button className="modal__btn-open" onClick={toggleModal}> Add </button>)}
      {isAuthenticated ? (<button className="btn__logout" onClick={(): Promise<void> => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>) :

        <button className="btn__login" onClick={(): Promise<void> => loginWithRedirect()}>Login</button>}

   
      {modalIsOpen && (
        <ModalContainer>
          <ModalContent>
            <h2>Add Movie</h2>
            <form className="form__modal" onSubmit={onsubmit}>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalName">Movie Name</label>
                <input className="form__modal-div-input" type="text" id="formModalName" {...register("Name")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalScore">Movie Score</label>
                <input className="form__modal-div-input" type="text" id="formModalScore" {...register("Score")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalGenre">Movie Genre</label>
                <input className="form__modal-div-input" type="text" id="formModalGenre" {...register("Genre")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalYear">Year</label>
                <input className="form__modal-div-input" type="text" id="formModalYear" {...register("Year")} />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalFile">Upload File</label>
                <input className="form__modal-div-input" type="file" id="formModalFile" {...register("Image")} />
              </div>
             
              <button className="form__modal-btnAddMovie" type="submit">Add Movie</button>
           
            </form>
            <ModalButton onClick={toggleModal}>Close Modal</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}


    </ModalStyles>
  )
}