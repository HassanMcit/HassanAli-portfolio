import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.css"
import Slider from "./Slider";

const Skills = () => {

    return (
        <section className="skill pt-5 mb-3" id="skills">
            <Container>
                <div className="position-relative d-flex text-center mb-5">
                    <h2 className="fw-bold w-100 mb-0 text-light display-1">Skills</h2>
                    <p className="fs-2 fw-bold position-absolute w-100 align-self-center lh-base mb-0 text-dark">
                        What I Do
                        <span className="border-bottom border-2 mt-0 d-block mx-auto"></span>
                    </p>
                </div>
                <Slider></Slider>
            </Container>
        </section>


    );
}

export default Skills;