import { Outlet } from "react-router-dom"
import { MainGrid } from "."
import { Footer, Header, Main } from "../components"


export const Layout = () => {

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
