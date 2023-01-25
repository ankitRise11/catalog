import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import catalog from "../Assets/Logo.png";
import Nav from "react-bootstrap/Nav";
const NavBar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
    navigate("/feed");
  };
  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  return (
    
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="logoFont">
          <img width="50px" height="50px" src={catalog} />
          Catalog.
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end me-5">
          <Navbar.Text>
            {user && (
              <div className="ms-5">
                <Navbar.Text className="px-4 border-end text-light">
                  <NavLink className="text-decoration-none" style={navLinkStyles} to="/shortContent">
                    Short Content
                  </NavLink>
                </Navbar.Text>
                <Navbar.Text className="px-4 border-end text-light">
                  <NavLink className="text-decoration-none" style={navLinkStyles} to="/shortVideo">
                    Short Video
                  </NavLink>
                </Navbar.Text>
                <Navbar.Text className="px-4 text-light">
                  <NavLink className="text-decoration-none" style={navLinkStyles} to="/longContent">
                    Long Content
                  </NavLink>
                </Navbar.Text>
              </div>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {!user && (
              <Button onClick={GoogleLogin} variant="outline-light">
                <FcGoogle size={30} />
                <a> Continue with Google</a>
              </Button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
