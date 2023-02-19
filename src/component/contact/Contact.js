import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Contact = () => {
    return (
        <section id="contact" className="about-section text-dark mb-3">
            <Container className="bg-light pb-5">
                <div className="position-relative d-flex text-center my-5">
                    <h2 className="w-100 mt-5 mb-0 text-light fw-bolder display-1 text-uppercase">Contact</h2>
                    <p className="fs-3 fw-bold position-absolute w-100 align-self-center lh-base mb-0 text-dark mt-5">
                        Get In Touch
                        <span className="border-bottom border-2 mt-0 d-block mx-auto"></span>
                    </p>
                </div>
                <Row>
                    <Col md={4} xl={3} className="text-center text-md-start">
                        <h2 className="mb-3 fs-4 text-uppercase">Addres</h2>
                        <p className="fs-6 mb-4">
                            2nd floor,
                            <br />
                            19 El-Gohary
                            <br />
                            Giza, Egypt
                        </p>
                        <p className="fs-6 mb-1">
                            <span className="text-success fs-5 me-2">
                                <FaPhoneAlt></FaPhoneAlt>
                            </span>
                            (+20) 1019187776
                        </p>
                        <p className="fs-6 mb-4">
                            <span className="text-success fs-5 me-2">
                                <FaEnvelope></FaEnvelope>
                            </span>
                            alienghassan000@gmail.com
                        </p>
                        <h2 className="mb-3 fs-4 text-uppercase pt-4">Follow ME</h2>
                        <ul className="d-flex flex-wrap justify-content-center justify-content-md-start">
                            <li className="my-2 me-4 overflow-visible p-0">
                                <a href="https://www.facebook.com/" target="_blank" className="text-secondary face">
                                    <FaFacebookF></FaFacebookF>
                                </a>
                            </li>
                            <li className="my-2 me-4 overflow-visible p-0">
                                <a href="https://www.linkedin.com/" target="_blank" className="text-secondary linked">
                                    <FaLinkedinIn></FaLinkedinIn>
                                </a>
                            </li>
                            <li className="my-2 me-4 overflow-visible p-0">
                                <a href="mailto:alienghassan000@gmail.com" target="_blank" className="text-secondary google">
                                    <FaGoogle></FaGoogle>
                                </a>
                            </li>
                            <li className="my-2 me-4 overflow-visible p-0">
                                <a href="https://github.com/HassanMcit" target="_blank" className="text-secondary git">
                                    <GoMarkGithub></GoMarkGithub>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={8} xl={9}>
                        <h2 className="mb-3 fs-4 text-uppercase text-center text-md-start">Send US</h2>
                        <form method="post">
                            <Row>
                                <Col xl={6}><Form.Control type="text" size="lg" placeholder="Name" /></Col>
                                <Col xl={6}><Form.Control type="email" size="lg" placeholder="Email" /></Col>
                                <Col className="py-3"><Form.Control
                                    as="textarea"
                                    placeholder="Tell us more about your needs........"
                                    style={{ height: '150px' }}
                                />
                                </Col>
                                <p className="text-center mt-4 mb-0">
                                    <Button className="btn btn-success px-4 py-2 rounded-pill d-inline-flex">Send Message</Button>
                                </p>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;