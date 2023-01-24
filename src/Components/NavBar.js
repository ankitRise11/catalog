import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import catalog from "../Assets/Logo.png";
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
    navigate("/feed")
  };
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home"><img width="40px" height="40px" src={catalog} /></Navbar.Brand>
        <Navbar.Toggle />
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
