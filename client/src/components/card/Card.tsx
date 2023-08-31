import { deleteMovie } from "../../api/deleteMovie";
import { ModalPut } from "../modalPut/modalPut";
import { CardStyles } from "./card.styles"
import { useAuth0 } from "@auth0/auth0-react";


export interface MoviesType {
  id: string;
  title: string;
  score: number;
  year: number;
  country: string;
  imageId: string;
  genres: GenreType[];
  genresArray: string[];
  createdAt: string;
  updatedAt: string;
  usersId: string;
}

interface GenreType {
  id: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  moviesId: string[];
}

export const Card = ({ ...props }) => {
  console.log(props);

  const url = `http://localhost:3000/movies/${props.id}`;

const {getAccessTokenSilently} = useAuth0();

const handleDelete = async () => {

await deleteMovie(url, getAccessTokenSilently)
props.fetchData()


}

  return (

    <CardStyles>

      <div className="card__div1">
        <img className="card__div1-img" src={props.imageUrl} alt={props.title} />
      </div>

      <div className="card-text">
        <h2>{props.title}</h2>
      </div>
      <div className="card-text">
        <h3>{props.genresArray}</h3>
      </div>
      <div className="card-text">
        <h4>{props.year}</h4>
      </div>
      <div className="card-text">
        <h4>{props.score}</h4>
      </div>
      <div className="card__div2"></div>
      <div className="card__div3"></div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={ModalPut}>Update</button>



    </CardStyles>

  )
}



