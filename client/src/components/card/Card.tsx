import { useEffect } from "react";
import { deleteMovie } from "../../api/deleteMovie";
import { ModalUpdate } from "../modalUpdate/ModalUpdate";
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

useEffect(() => {
console.log(props.genres);


}, [])

  return (

    <CardStyles>

      <div className="card__div1">
        <img className="card__div1-img" src={props.imageUrl} alt={props.title} />
      </div>

      <div className="card-text">
        <h2>{props.title}</h2>
      </div>
      <div className="card-text">
      <h3> {props.genres[0] && props.genres[props.genres.length-1].genre}  </h3>
        
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
      <ModalUpdate id={props.id} title={props.title} score={props.score} year={props.year} genres={props.genres[0] ? props.genres[props.genres.length-1].genre : ''} imageId={props.imageId} imageUrl={props.imageUrl}/>

    </CardStyles>

  )
}



