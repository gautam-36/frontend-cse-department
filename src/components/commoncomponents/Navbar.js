import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import GJULogo from '../../assets/GJU.png';

function OffcanvasExample() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary" bg="dark" data-bs-theme="dark"  fixed="top" >
          <Container fluid>
            <Navbar.Brand href="/">
                <img
                src={GJULogo}
                width="100"
                height="50"
                className="d-inline-block align-top"
                alt="TB6"
                />
            </Navbar.Brand>
            <Navbar.Brand href="/">CSE Department</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark" data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  TB VI
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/faculty">Faculty</Nav.Link>
                  <Nav.Link href="/alumini">Alumini</Nav.Link>
                  <Nav.Link href="/infrastructure">Infrastructure</Nav.Link>
                  <Nav.Link href="/placement">Placement</Nav.Link>
                  <Nav.Link href="/departments">Departments</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;