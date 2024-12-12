import React, { useState } from "react";
import "../styles/Contact.css";
import water from "../assets/images/water4.jpg";

export default function Contact() {
  const [name, setName] = useState(""); //values of state are all blank so it may "refresh" on click
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [heading, setHeading] = useState("Contact Us");

  function handleChange(event) {
    setName(event.target.value); //sets the value of name form name input.
  }

  function submit(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    setHeading(`Thank you, ${name}!`); // resets heading with name from form and refreshes the inputs to null
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <div>
      <div className="contact-container">
        <img
          src={water}
          className="contact-background"
          alt="background image"
        />
        <div className="contact-form-div">
          <div className="contact-blurb">
            <h1>{heading}</h1>
            <p className="contact-p">
              Please write your enquiry below. Allow up to 4 working days for a
              response.
            </p>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <input
              type="text"
              aria-label="First Name"
              name="firstName"
              placeholder="First Name"
              value={name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              aria-label="Last Name"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <input
              type="email"
              aria-label="Email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              aria-label="Phone"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              aria-label="Message"
              name="message"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
