import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const CNav = ()=> {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand className='title' href="/"><img style={{width:"30px"}} src='public/logoSpace.png' alt='logo'className='me-2'/>Void-g</Navbar.Brand>
          <Nav className="ms-auto text">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default CNav