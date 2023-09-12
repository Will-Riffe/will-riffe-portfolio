import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /*
        below, the code extracts name and value from the event (e) of 
        an element (target); then we update the state of the target
        by copying (...) formData, and adding the property key "name"
        and it's associated value extracted from the target element.
    */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //...I will think about this shortly...
  };

  return (
    <section className="show-border contact-form makeMeToasty">
      <h1>~ HMU ~</h1>
      <form onSubmit={handleSubmit}>
        <div className="entry-div">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            className="input-box box-border"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="entry-div">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="input-box box-border"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="entry-div show-border">
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            className="message-box box-border"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="center show-border">
          <button type="submit" className="main-btn">
            Send!
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
