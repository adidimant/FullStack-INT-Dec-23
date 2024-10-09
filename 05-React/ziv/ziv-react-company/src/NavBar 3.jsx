import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

function BasicExample() {
  return (
    <Navbar className='NavBar' expand="lg">
      <Container className='container'>
          <Nav className="me-auto">
            <Nav.Link className='NavLink' href="#home" >Home</Nav.Link>
            <Nav.Link className='NavLink' href="#link" >Link</Nav.Link>
            <NavDropdown className='NavLink' title="Dropdown" Dropdown id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;