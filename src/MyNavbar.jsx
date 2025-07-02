import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar  bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>

        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/favicon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Mehdreams
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
      
            <Nav.Link href="#About">Home</Nav.Link>
 
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#forWomen">For Men</NavDropdown.Item>
              <NavDropdown.Item href="#forWomen">
                For Women
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#forWomen">
                For Children
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;