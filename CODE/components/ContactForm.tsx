"use client";
import { useState } from "react";
import Input from "./Input";

const ContactForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="contactForm">
      <div className="contactForm__left">
        <Input
          label="Firstname"
          value={firstname}
          onChange={(e: string) => setFirstname(e)}
        />
        <Input
          label="Lastname"
          value={lastname}
          onChange={(e: string) => setLastname(e)}
        />
        <Input
          label="E-Mail"
          value={email}
          type="email"
          onChange={(e: string) => setEmail(e)}
        />
      </div>
      <div className="contactForm__right">
        <Input
          label="Message"
          value={message}
          onChange={(e: string) => setMessage(e)}
        />
        <button className="contactForm__button">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
