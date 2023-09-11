import React from "react";
import ContactForm from "./contactForm";
import Upcoming from "./upcoming";
import "./contact.css";

function Contact(props) {
  return (
    <section className="show-border main-content">
      <header className="show-border ">
        <div className="content-header">Contact</div>
      </header>
      <div className="alternate-order">
        <ContactForm />
        <Upcoming />
      </div>
    </section>
  );
}
export default Contact;
