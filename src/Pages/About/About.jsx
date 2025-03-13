import React from "react";
import "./About.css";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageTransition from "../../components/PageTransition/PageTransition";

const About = () => {
    return (
        <PageTransition>
            <div className="about">
                <div className="about-container">
                    {/* box on the left */}
                    <div className="about-box-container">
                        <div className="about-box">
                            {/* about title */}
                            <div className="about-title">
                                <div className="about-image-container">
                                    <img
                                        className="about-image"
                                        src="/images/profile-personal.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="about-name fw-bold fs-4">
                                    <span className="last-name">Phạm</span>
                                    <span className="first-name">Anh Tuấn</span>
                                </div>
                                <p className="about-subtitle">Prorammer</p>
                            </div>
                            {/* about footer */}
                            <div className="about-footer">
                                <a href="https://www.facebook.com/phamanhtuan07/">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* box on the right */}
                    <div className="intro-box-container">
                        <div className="intro-box">
                            <h1 className="intro-title">Hello</h1>
                            <p className="intro-text">Here's who I am & what I do</p>
                            <div className="intro-buttons">
                                <button className="btn btn-blue">RESUME</button>
                                <button className="btn btn-white">PROJECTS</button>
                            </div>
                            <p className="intro-description">
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double click me to add your own
                                content and make changes to the font.
                            </p>
                            <p className="intro-description">
                                I’m a great place for you to tell a story and let your users know a
                                little more about you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
