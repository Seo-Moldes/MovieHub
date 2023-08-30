import { CardStyles } from "./card.styles"

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

export const Card = ({...props}) => {
  console.log(props);


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


</CardStyles>

  )
}



