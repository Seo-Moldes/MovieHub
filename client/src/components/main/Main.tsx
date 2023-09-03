import { useEffect, useState } from "react"
import { MainStyles } from ".."
import { Card } from "../card/Card"
import { FetchApi } from "../../api/fetchApi"
import { useAuth0 } from "@auth0/auth0-react"
import { MoviesType } from "../card/Card"

export const Main = () => {

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
    const fetchInterval = setInterval(() => fetchData(), 5000);
        return () =>
            clearInterval(fetchInterval);

  }, [url])

  useEffect(() => {
    console.log(movieData);
    

  }, [movieData])

  return (
    <MainStyles>
      <div className="main-card">
        {movieData.map((movies: MoviesType) => (
          <Card key={movies.id} {...movies} fetchData = {fetchData} />

        ))}

      </div>

    </MainStyles>
  )
}
