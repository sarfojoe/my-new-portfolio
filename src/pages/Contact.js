import React from "react";
import "./pages.css";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div className="container">
            <div className="contact-wrapper">
                <h2 className="uk-text-center">Contact</h2>
                <div className="contactWrapper uk-child-width-1-2@m" uk-grid="true">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;