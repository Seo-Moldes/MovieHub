import { useState } from "react";
import { ModalUpdateButton, ModalUpdateContainer, ModalUpdateContent, ModalUpdateStyles } from "./modalUpdate.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { editMovie } from "../../api/editMovie";
import { VITE_URL_MOVIES } from "../../global/serverUrls";


interface MoviesType  {
  id: string;
  title: string;
  score: number;
  year: number;
  genres: string[];
  imageId: string;
  imageUrl: string
} 

export const ModalUpdate = ({id, title, score, year, genres}: MoviesType) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const {register, handleSubmit} = useForm({defaultValues:{title, score, year, genres}});


const onsubmit = handleSubmit( (data: any) => {

  const url = `${VITE_URL_MOVIES}/${id}`;
  
  editMovie(url, data, getAccessTokenSilently)
  setIsOpen(!modalIsOpen);
})



  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (

    <ModalUpdateStyles>
      {isAuthenticated && (<button className="modal__btn-open" onClick={toggleModal}> Modify </button>)}

   
      {modalIsOpen && (
        <ModalUpdateContainer>
          <ModalUpdateContent>
            <h2>Add Movie</h2>
            <form className="form__modal" onSubmit={onsubmit}>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalName">Movie Name</label>
                <input className="form__modal-div-input" type="text" id="formModalName" {...register("title")} />
                
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalScore">Movie Score</label>
                <input className="form__modal-div-input" type="number" id="formModalScore" {...register("score")}    />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalGenre">Movie Genre</label>
                <input className="form__modal-div-input" type="text" id="formModalGenre" {...register("genres")}   />
              </div>
              <div className="form__modal-div">
                <label className="form__modal-div-label" htmlFor="formModalYear">Year</label>
                <input className="form__modal-div-input" type="number" id="formModalYear" {...register("year")}  />
              </div>
            
              <button className="form__modal-btnAddMovie" type="submit">Modify</button>
          
           
            </form>
            <ModalUpdateButton className="btn_close" onClick={toggleModal}>Close Modal</ModalUpdateButton>
          </ModalUpdateContent>
        </ModalUpdateContainer>
      )}


    </ModalUpdateStyles>
  )
}