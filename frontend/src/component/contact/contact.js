import React, { useState } from "react";
import "./contact.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import reactimg from "../../assets/react.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import gmailIcon from "../../assets/vecteezy_icono-de-gmail-png_16716465.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import emailsent from "../../assets/send.gif";
import axios from "axios";
// const baseurl = "https://nodemailer-q1f2.onrender.com";
const baseurl = "https://portfolio-backend-psi-two.vercel.app/";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();

    if (email && name !== "" && message !== "" && subject !== "") {
      console.log({ email, message, name });

      setLoading(true);

      const body = {
        email,
        message,
        subject,
        name,
      };

      await axios
        .post(`${baseurl}/mail`, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // Set loading to false after successful request
          setLoading(false);
          alert("Email Sent Successfully");

          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");

          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          console.log("HHII");
          console.log(err);
        });
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
        {loading && (
          <div className="loading-overlay">
            <img src={emailsent} alt="Loading" className="loading-indicator" />
          </div>
        )}
        <h1 className="contactpageTitle">Contact me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.{" "}
        </span>

        <form className="contactForm" onSubmit={handleRequest} method="post">
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
            type="text"
            id="subject"
            className="subject"
            placeholder="Subject"
            name="subject"
            value={subject}
            required={true}
            onChange={(e) => setSubject(e.target.value)}
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
            id="message"
            value={message}
            rows="5"
            placeholder="Your message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="submitBtn"
            onClick={handleRequest}
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

            <a href="mailto:singhshyam1089@gmail.com">
              <img src={gmailIcon} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
