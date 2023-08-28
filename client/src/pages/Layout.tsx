import { Outlet } from "react-router-dom"
import { MainGrid } from "."
import { Footer, Header} from "../components"
import { useAuth0 } from "@auth0/auth0-react"
import { postApi } from "../api/postApi"
import { useEffect } from "react"


export const Layout = () => {

const url = "http://localhost:3000/users";

  const {user, getAccessTokenSilently} = useAuth0();

  useEffect(() => {
    
  if(user){postApi(url, user, getAccessTokenSilently) } 
  
  }, [user])
  

  return (

    <MainGrid>

      <Header/>
      <main className="mainGrid">

        <Outlet/>

      </main>
      <Footer/>

    </MainGrid>
  )
}
