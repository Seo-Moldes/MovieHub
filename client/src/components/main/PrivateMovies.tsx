import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { FetchApi } from "../../api/fetchApi";
import { Card, MoviesType } from "..";


export const PrivateMovies = () => {
    const [movieData, setMovieData] = useState([])

  const { getAccessTokenSilently, user } = useAuth0()
  let url = "";
if(user) {

   url = `users/${user?.email}`

}
  const fetchData = async () => {

    const data = await FetchApi(url, getAccessTokenSilently)
    setMovieData(data.movies)

  }
  useEffect(() => {

    fetchData();
console.log(movieData);

    const fetchInterval = setInterval(() => fetchData(), 3000);
        return () =>
            clearInterval(fetchInterval);

  }, [url])

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


