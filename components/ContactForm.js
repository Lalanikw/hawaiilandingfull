"use client"

import React, { useState } from "react";
import './ContactForm.css'

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = postContactData(fullname, email, message);

  setError(msg);
  setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="ContactForm " >
        <div>
          <label htmlFor="fullname">Full Name*</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"   />
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message*</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-green-400 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="contact-error">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`} > {e}
            </div>
          ))}
      </div>
    </div>
  );
}