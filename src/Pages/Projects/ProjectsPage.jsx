import React from "react";
import "./ProjectsPage.css";
import PageTransition from "../../components/PageTransition/PageTransition";

const ProjectsPage = () => {
    return (
        <PageTransition>
            <div className="projects">
                <div className="projects-container">
                    <h1 className="projects-heading">
                        <span className="projects-square"></span>
                        Projects
                    </h1>
                    <div className="projects-details">
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It's easy.
                            Just click “Edit Text” or double click me to add your own content and
                            make changes to the font.I’m a great place for you to tell a story and
                            let your users know a little more about you.
                        </p>
                    </div>
                    <div className="projects-card-container">
                        {/* card 1 */}
                        <div class="projects-card">
                            <div class="projects-content">
                                <div class="projects-bar"></div>
                                <h2 class="projects-title">Project name 01</h2>
                                <h3 class="projects-role">Role Title</h3>
                                <p class="projects-description">
                                    I'm a paragraph. Click here to add your own text and edit me.
                                    It’s easy. Just click “Edit Text” or double click me to add your
                                    own content and make changes to the font. I’m a great place for
                                    you to tell a story and let your users know a little more about
                                    you.
                                </p>
                            </div>
                            <div class="projects-image">
                                <img
                                    src="https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_403,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Leaflet.jpg"
                                    alt="Project Image"
                                />
                            </div>
                        </div>

                        {/* card 2 */}
                        <div class="projects-card">
                            <div class="projects-content">
                                <div class="projects-bar"></div>
                                <h2 class="projects-title">Project name 01</h2>
                                <h3 class="projects-role">Role Title</h3>
                                <p class="projects-description">
                                    I'm a paragraph. Click here to add your own text and edit me.
                                    It’s easy. Just click “Edit Text” or double click me to add your
                                    own content and make changes to the font. I’m a great place for
                                    you to tell a story and let your users know a little more about
                                    you.
                                </p>
                            </div>
                            <div class="projects-image">
                                <img
                                    src="https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_403,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Website_Mockup.jpg"
                                    alt="Project Image"
                                />
                            </div>
                        </div>

                        {/* card 3 */}
                        <div class="projects-card">
                            <div class="projects-content">
                                <div class="projects-bar"></div>
                                <h2 class="projects-title">Project name 01</h2>
                                <h3 class="projects-role">Role Title</h3>
                                <p class="projects-description">
                                    I'm a paragraph. Click here to add your own text and edit me.
                                    It’s easy. Just click “Edit Text” or double click me to add your
                                    own content and make changes to the font. I’m a great place for
                                    you to tell a story and let your users know a little more about
                                    you.
                                </p>
                            </div>
                            <div class="projects-image">
                                <img
                                    src="https://static.wixstatic.com/media/9dbeebdedcd94c2489ccaca2b9fd1aa4.jpg/v1/crop/x_783,y_0,w_2172,h_2725/fill/w_403,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/App%20Screen.jpg"
                                    alt="Project Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ProjectsPage;
