import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FcGoogle} from 'react-icons/fc';

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Catalog</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FcGoogle size={30}/><a> Login with Google</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar