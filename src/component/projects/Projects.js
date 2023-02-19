import React from "react";
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <Container className="py-3">
        <Row>
          <Col md={12}>
            <div className="position-relative d-flex text-center mb-5">
              <h2 className="fw-bold w-100 mb-0 text-light display-1">
                Projects
              </h2>
              <p className="fs-2 fw-bold position-absolute w-100 align-self-center lh-base mb-0 text-dark">
                My Work
                <span className="border-bottom border-2 mt-0 d-block mx-auto"></span>
              </p>
            </div>
          </Col>
          <Col className="mx-auto projects py-5 text-dark">
            <Tab.Container id="project-tab" defaultActiveKey="first" className="justify-content-center">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Desgin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Brand</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="m-3">
                    <Col className="mb-4">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">
                            Project 1
                          </Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="mb-4">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">Project 2</Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="mb-4">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">Project 3</Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="m-3">
                    <Col className="mb-4">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="	https://harnishdesign.net/demo/react/simone/demo/images/projects/project-2.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">
                            Project 1
                          </Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="mb-4">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-7.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">Project 2</Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="mb-4">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-5.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">Project 3</Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row className="m-3">
                    <Col md={6} className="mb-4">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-6.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">
                            Project 1
                          </Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Card style={{ width: "18rem" }} className="ms-auto">
                        <Card.Img
                          variant="top"
                          src="https://harnishdesign.net/demo/react/simone/demo/images/projects/project-4.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold fs-4 pb-3">Project 2</Card.Title>
                          <Card.Text className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit, nisi tempore veniam deleniti officiis
                            voluptate veritatis, enim natus in, ab dolorem!
                            Aliquid earum tempora illum, beatae rem voluptatum
                            dignissimos consequuntur!.
                          </Card.Text>
                          <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
