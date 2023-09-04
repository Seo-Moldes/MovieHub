import { useEffect, useState } from "react";
import { Card, MoviesType } from "..";
import { FetchPublicApi } from "../../api/fetchPublicApi";


const PublicMovies = () => {
    const [movieData, setMovieData] = useState([])


  const fetchData = async () => {

    const data = await FetchPublicApi("publicmovies")
    setMovieData(data)
    console.log(data);
    

  }
  useEffect(() => {

    fetchData();
    

  }, [])

  useEffect(() => {
    console.log(movieData);
    

  }, [movieData])

  return (
    <div className="main-card">
        {movieData.map((movies: MoviesType) => (
          <Card key={movies.id} {...movies} fetchData = {fetchData} />

        ))}

      </div>

  )
}


export default PublicMovies