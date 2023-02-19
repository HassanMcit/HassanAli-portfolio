import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about-section text-dark">
            <Container>
                <div className="position-relative d-flex text-center mb-5">
                    <h2 className="w-100 mt-5 mb-0 text-light fw-bolder display-1 text-uppercase">About Me</h2>
                    <p className="fs-3 fw-bold position-absolute w-100 align-self-center lh-base mb-0 text-dark mt-5">
                        Know Me More
                        <span className="border-bottom border-2 mt-0 d-block mx-auto"></span>
                    </p>
                </div>
                <Row>
                    <Col lg={7} xl={8} className="text-lg-start">
                        <h2 className="fs-3 fw-bold mb-3">
                            I'm <span className="text-success">Hassan Ali,</span> a Web Developer
                        </h2>
                        <p className="lh-lg">
                            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className="lh-lg">
                            Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
                        </p>
                    </Col>
                    <Col lg={5} xl={4}>
                        <div className="ps-lg-4">
                            <ul className="list-group text-start list-group-flush">
                                <li className="list-group-item fs-6">
                                    <span className="fw-bold">Name:</span> Hassan Ali
                                </li>
                                <li className="list-group-item fs-6">
                                    <span className="fw-bold fs-6">Email:</span>
                                    <span className="text-success fw-bolder ms-1">  
                                        <a className="text-success text-decoration-none" 
                                            href="mailto:alienghassan000@gmail.com"> 
                                            alienghassan000@gmail.com
                                        </a>
                                    </span>
                                </li>
                                <li className="list-group-item fs-6">
                                    <span className="fw-bold">Age:</span> 28
                                </li>
                                <li className="list-group-item fs-6">
                                    <span className="fw-bold">From:</span> Cairo, Egypt
                                </li>
                            </ul>
                            <a 
                            href="https://drive.google.com/file/d/1Nj0fPG4xU3QT3qmgOKVMIu-_rYYB0s0e/view?usp=share_link"
                            download
                            className="btn btn-success rounded-pill d-block w-50 mt-2 py-3">
                                Download CV
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;