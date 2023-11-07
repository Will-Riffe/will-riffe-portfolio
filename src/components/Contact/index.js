import React from "react";
import ContactForm from "./contactForm";
import Upcoming from "./upcoming";
import SocialFooter from "./socialFooter";
import "./contact.css";

function Contact(props) {
  return (
    <section className="main-content">
      <header>
        <div className="content-header">Contact</div>
      </header>
      <article>
        <nav className="article-nav">
          <div className=" article-active">
            <h4>Get in touch with me here</h4>
          </div>
        </nav>
        <div className="content smallScroll reverseSmall">
          <div className="half-wide">
            <ContactForm />
          </div>
          <div>
            <SocialFooter />
          </div>
        </div>
      </article>
    </section>
  );
}
export default Contact;
