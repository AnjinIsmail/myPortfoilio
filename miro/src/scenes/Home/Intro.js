import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";
import { NavLink, Link, useRouteMatch } from "react-router-dom";

function Intro() {
    return (
        <section className="section section-hero  overlay-image" style={{ backgroundImage:`url(/assets/images/hero/coffe.png)`}}>
            <Particles
                params={{
                    // particles: {
                    //     number: {
                    //         value: 300,
                    //         density: {
                    //             enable: true,
                    //         },
                    //     },
                    //     size: {
                    //         value: 5,
                    //         random: true,
                    //     },
                    //     move: {
                    //         direction: "bottom",
                    //         out_mode: "out",
                    //     },
                    //     line_linked: {
                    //         enable: false,
                    //     },
                    // },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse"
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 3,
                            },
                            repulse: {
                                distance: 400,
                                duration: 4
                            }
                        }
                    }
                }}
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">I'm Anji Ismail.</span>
                        </p>
                        <h1>
                            I'm a{" "}
                            <TextLoop>
                                <span> Full Stack web Developer</span>
                                <span> creator</span>
                                <span> innovator</span>
                            </TextLoop>
                            <br />
                            Based in Bay Area
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <NavLink to={"/portfolio"}>
                            <span className="text">My Portfolio</span>
                            </NavLink>
                        </button>
                        {/* <button className="button button-lg">
                            <span className="text">Read More</span>
                        </button> */}
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;






// style={{ backgroundImage: `url(/assets/images/hero/home.jpg)`}}