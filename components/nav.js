import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export default function Navigator(){
  return <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Next JS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="/posts">Posts</Nav.Link>
                  <Nav.Link href="/comments">Comments</Nav.Link>
                  <Nav.Link href="/albums">Albums</Nav.Link>
                  <Nav.Link href="/photos">Photos</Nav.Link>
                  <Nav.Link href="/todos">ToDos</Nav.Link>
                  <Nav.Link href="/users">Users</Nav.Link>
                </Nav>
          </Navbar.Collapse>
  </Navbar>
}