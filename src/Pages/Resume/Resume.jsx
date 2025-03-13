import React from "react";
import "./Resume.css";
import Skill from "../../components/Skills/Skill";
import PageTransition from "../../components/PageTransition/PageTransition";

const Resume = () => {
    return (
        <PageTransition>
            <div className="resume">
                <div className="resume-container">
                    <h1 className="resume-title">
                        <span className="resume-square"></span>
                        Resume
                    </h1>
                    {/* box 1 */}
                    <div className="resume-box">
                        {/* Experience */}
                        <div className="resume-subtitle">
                            <span>Experience</span>
                            <button>DOWNLOAD CV</button>
                        </div>

                        {/* card 1 */}
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3 className="job-duration">2035 - Present</h3>
                                <p className="job-title">JOB POSITION</p>
                                <p className="company-name">Company Name</p>
                                <p className="company-location">Company Location</p>
                            </div>
                            <div className="experience-description">
                                <p>
                                    I'm a paragraph. Click here to add your own text and edit me.
                                    It's easy. Just click “Edit Text” or double click me to add your
                                    own content and make changes to the font.
                                </p>
                                <p>
                                    I’m a great place for you to tell a story and let your users
                                    know a little more about you.
                                </p>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3 className="job-duration">2035 - Present</h3>
                                <p className="job-title">JOB POSITION</p>
                                <p className="company-name">Company Name</p>
                                <p className="company-location">Company Location</p>
                            </div>
                            <div className="experience-description">
                                <p>
                                    I'm a paragraph. Click here to add your own text and edit me.
                                    It's easy. Just click “Edit Text” or double click me to add your
                                    own content and make changes to the font.
                                </p>
                                <p>
                                    I’m a great place for you to tell a story and let your users
                                    know a little more about you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* box 2 */}
                    <div className="resume-box">
                        {/* Education */}
                        <div className="resume-subtitle">
                            <span>Education</span>
                        </div>

                        {/* card 1 */}
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3 className="job-duration">2035 - 2035</h3>
                                <p className="job-title">UNIVERSITY NAME</p>
                                <p className="company-name">Degree Level</p>
                                <p className="company-location">University Location</p>
                            </div>
                            <div className="experience-description">
                                <p>
                                    I'm a paragraph. Click here to add your own text and edit me.
                                    It's easy. Just click “Edit Text” or double click me to add your
                                    own content and make changes to the font.
                                </p>
                                <p>
                                    I’m a great place for you to tell a story and let your users
                                    know a little more about you.
                                </p>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3 className="job-duration">2035 - 2035</h3>
                                <p className="job-title">UNIVERSITY NAME</p>
                                <p className="company-name">Degree Level</p>
                                <p className="company-location">University Location</p>
                            </div>
                            <div className="experience-description">
                                <p>
                                    I'm a paragraph. Click here to add your own text and edit me.
                                    It's easy. Just click “Edit Text” or double click me to add your
                                    own content and make changes to the font.
                                </p>
                                <p>
                                    I’m a great place for you to tell a story and let your users
                                    know a little more about you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* box 3 */}
                    <div className="resume-box">
                        <Skill />
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Resume;
