import React from "react";
import "./Contact.css";

function ContactForm() {
  return (
    <div className="contact">
      <h1 style={{ textAlign: "center" }}>Send us a message!</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit" className="homebtn">
          Send message!
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
