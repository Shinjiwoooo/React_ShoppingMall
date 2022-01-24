import logo from './logo.svg';
import {Navbar, Container, Nav, NavDropdown,jumbotron,button} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <JumboTron></JumboTron>

    </div>
  );
}

function JumboTron() {
  return (
    <div className="jumbotron">
      <div className='jumbo_wrap'>
        <h1>10% Season Off</h1>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </div>
  )
}

export default App;