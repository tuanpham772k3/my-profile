import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>
                    © 2035 by Phạm Anh Tuấn.
                    <br />
                    Powered and secured by <a href="#">Wix</a>
                </p>
            </div>
            <div className="footer-right">
                <div className="contact-info">
                    <p>
                        <strong>Call</strong>
                        <br />
                        0328-732-135
                    </p>
                    <p>
                        <strong>Write</strong>
                        <br />
                        <a href="mailto:info@mysite.com">info@mysite.com</a>
                    </p>
                    <p>
                        <strong>Follow</strong>
                        <br />
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
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
