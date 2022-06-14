import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container className='ms-auto'>
          <Navbar.Brand href="#home">
            Premier League
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#table">Table</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#results">Results</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;