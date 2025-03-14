import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";
import PageTransition from "../../components/PageTransition/PageTransition";

const Contact = () => {
    return (
        <PageTransition>
            <div className="contact">
                <div className="contact-container">
                    <h1 className="contact-heading">
                        <span className="contact-square"></span>
                        Let's talk
                    </h1>
                    <ContactForm />
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;
