import { Nav, Row, Col, Container } from "react-bootstrap"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
const Header = () => {
  return (
    <header className="header py-3">
        <Nav className="justify-content-space-between align-items-center">
            <Container>
                <Row>
                    <Col className="col-6">
                      <h5 className="fw-bold">Where in the world?</h5>
                    </Col>
                    <Col className="col-6 d-flex justify-content-end">
                    <ThemeToggle />
                    </Col>
                </Row>
            </Container>
        </Nav>
    </header>
  )
}

export default Header