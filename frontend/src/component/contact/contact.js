import React, { useRef, useState } from "react";
import "./contact.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import reactimg from "../../assets/react.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import gmailIcon from "../../assets/vecteezy_icono-de-gmail-png_16716465.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import axios from 'axios';
const baseurl = "https://nodemailer-q1f2.onrender.com"

// import emailjs from "@emailjs/browser";
// import { response } from "express";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // console.log(name);
  // console.log(email);
  // console.log(message);

  const handleRequest = async (e) => {
    if (email  && name !== "") {
      if (message !== "") {
        e.preventDefault();
        // setLoading(true);
        console.log({ email, message, name});

        const body = {
          email,
          message,
          // subject,
          name,
          // company,
        };

        await axios.post(`${baseurl}/mail`, body, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            alert("Email Sent Successfully");
            // setLoading(false);
            console.log(res);
            // window.location.reload();
          })
          .catch((err) => {
            console.log("HHII")
            console.log(err);
            // setLoading(false);
          });
      } else {
        alert("Compose Email");
      }
    } else {
      alert("Please fill all required filled");
    }
  };

  return (
    <section id="contactPage">
      <div id="skills">
        <h1 className="contactpageTitle">SKILLS</h1>

        <div className="skillImgs">
          <span className="imgtextcontainer">
            <img src={html} alt="html" className="skillImg" />
            <h5 className="skilltext">HTML</h5>
          </span>

          <span className="imgtextcontainer">
            <img src={css} alt="css" className="skillImg" />
            <h5 className="skilltext">CSS</h5>
          </span>

          <span className="imgtextcontainer">
            <img src={javascript} alt="javascript" className="skillImg" />
            <h5 className="skilltext">JS</h5>
          </span>

          <span className="imgtextcontainer">
            <img src={reactimg} alt="react" className="skillImg" />
            <h5 className="skilltext">React</h5>
          </span>

          <span className="imgtextcontainer">
            <img src={git} alt="git" className="skillImg" />
            <h5 className="skilltext">Git</h5>
          </span>

          <span className="imgtextcontainer">
            <img src={github} alt="github" className="skillImg" />
            <h5 className="skilltext">Github</h5>
          </span>
        </div>
      </div>

      <div id="contact">
        <h1 className="contactpageTitle">Contact me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.{" "}
        </span>

        <form
          className="contactForm"
          onSubmit={handleRequest}
          method="post"
          // ref={form}
          // onSubmit={sendEmail}
        >
          <input
            type="text"
            id="name"
            className="name"
            placeholder="Your Name"
            name="name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            placeholder="Your email"
            name="email"
          />
          <textarea
            className="msg"
            id = "message"
            value = {message}
            rows="5"
            placeholder="Your message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="submitBtn"
            onClick = {handleRequest}
          >
            Submit
          </button>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/shyamsunder01/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="" className="link" />
            </a>

            <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=singhshyam1089@gmail.com&tf=1">
              <img src={gmailIcon} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
