import React from "react";
import ContactForm from "./contactForm";
import Upcoming from "./upcoming";
import SocialFooter from "./socialFooter";
import "./contact.css";

function Contact(props) {
  return (
    <section className="main-content scroll">
      <header>
        <div className="content-header">Contact</div>
      </header>
      <div className="alternate-order">
        <ContactForm />
        <Upcoming />
      </div>
      <div>
        <SocialFooter />
      </div>
    </section>
  );
}
export default Contact;
