import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container className="py-5">
                <Row className="text-dark">
                    <Col xl={6} className="text-center text-lg-start">
                        <p className="mb-3 mb-lg-0">
                            Copyright &#169; 2023
                            <a href="#home" className="fw-bold text-success text-decoration-none"> Hassan Ali </a>
                            . All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;