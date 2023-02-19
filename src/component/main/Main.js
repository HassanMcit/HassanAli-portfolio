import React from "react";
import "./Main.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typewriter } from "react-simple-typewriter";
import Button from 'react-bootstrap/Button';

const Main = () => {

    return (
        <div className="first-section" id="home">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="fs-2 fw-light text-white mb-2 mb-md-3">Welcome</p>
                        <div className="fw-bolder display-3 mb-3">
                            <Typewriter
                                words={["I'm Hassan Ali.", "I'm a Desginer.", "I'm a Freelancer."]}
                                loop={Infinity}
                                cursor
                                cursorStyle='|'
                                typeSpeed={120}
                                deleteSpeed={120}
                                delaySpeed={1000}
                            />
                        </div>
                        <p className="fs-4 text-light mb-4">Based in Cairo, Egypt</p>
                        <Button variant="outline-success" size="lg" className="p-3 px-5 rounded-5">Hire Me</Button>  
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Main;