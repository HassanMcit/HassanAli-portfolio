import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import "./Nav.css";

function NavBar() {

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
      setActiveLink(e);
    };

  return (
    <Navbar fixed='top' expand="lg" bg={scrolled ? "dark" : ""}  variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className='fs-2 ps-2'>Hassan Ali</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 fs-5" navbarScroll>
            <Nav.Link href="#home" className={activeLink === "home" ? "active text-success mx-2" : "mx-2"} onClick={() => handleClick("home")}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === "about" ? "active text-success mx-2" : "mx-2"} onClick={() => handleClick("about")}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active text-success mx-2" : "mx-2"} onClick={() => handleClick("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active text-success mx-2" : "mx-2"} onClick={() => handleClick("projects")}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === "contact" ? "active text-success mx-2" : "mx-2"} onClick={() => handleClick("contact")}>Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <OverlayTrigger
                key="left"
                placement="left"
                overlay={
                  <Tooltip id={`tooltip-left`}>
                    <strong style={{color: "#0077B5"}}>Linkedin</strong>
                  </Tooltip>
                }
              >
                <a href="https://www.linkedin.com/feed/"><FaLinkedinIn></FaLinkedinIn></a>
              </OverlayTrigger>

              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    <strong style={{color: "#4867AA"}}>Facebook</strong>
                  </Tooltip>
                }
              >
                <a href="https://www.facebook.com/"><FaFacebookF></FaFacebookF></a>
              </OverlayTrigger>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;