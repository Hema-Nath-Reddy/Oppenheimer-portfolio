import React from "react";
import { useState } from "react";
const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [form, setForm] = useState({ name, email, message, number });
  const [error, setError] = useState({});

  return (
    <div className="containers contact">
      <div className="form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          autoComplete="name"
          spellCheck="false"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          name="number"
          id="number"
          placeholder="Enter your number"
          autoComplete="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
          autoComplete="off"
          spellCheck="true"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default ContactMe;
