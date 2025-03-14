import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to="/">
                        <span className="navbar-brand-square"></span>
                        Phạm Anh Tuấn
                        <span>/ Programmer </span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                    to="/"
                                >
                                    About me
                                </NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                    to="/resume"
                                >
                                    Resume
                                </NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                    to="/projects"
                                >
                                    Project
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
