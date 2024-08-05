import { Container } from "react-bootstrap"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({children}) => {
  return (
    <>        
        <Header/>
            <Container className="container">
                <main>{ children }</main>
                <Footer/>
            </Container>
    </>

  )
}

export default Layout