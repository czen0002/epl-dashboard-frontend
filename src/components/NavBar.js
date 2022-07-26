import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container className='ms-auto'>
          <Navbar.Brand href="/">
            Premier League
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/table">Table</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
