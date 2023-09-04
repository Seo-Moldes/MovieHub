import { MainStyles } from ".."
import { useAuth0 } from "@auth0/auth0-react"
import PublicMovies from "./PublicMovies"
import { PrivateMovies } from "./PrivateMovies"

export const Main = () => {

  

  const { user, isAuthenticated } = useAuth0()
  

  return (
    <MainStyles>
      <div className="main-card">
       
      {!isAuthenticated ? <h2 className="homePageheader-title">List of Movies</h2>: 
        <h2 className="homePageheader-title">{user?.nickname}´s Movies</h2>}
        
      {!isAuthenticated ? (<PublicMovies />)
         : (<PrivateMovies/>)}
      </div>


    </MainStyles>
  )
}
