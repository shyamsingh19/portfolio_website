import React from "react";
import "./intro.css";
import bg from "../../assets/Polish_20231216_000305141.png";
import btnimg from "../../assets/download icon.png";
// import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="image-wrap">
        <img src={bg} alt="" className="bg" />
      </div>

      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introtext">
          I'm <span className="introName">Shyam </span>
          <br />
          Frontend Web developer{" "}
        </span>
        <p className="intropara">
          I am a skilled and passionate web developer with experience <br />creating visually appealing and user-friendly websites.{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/1jWxZqhLsNNvzn611D6VZUWCG0b-2G2tx/view?usp=sharing" rel="noreferrer"
          target="_blank"
          className="link"
        >
          <button className="btn">
            <img src={btnimg} alt="resume" className="btnImg" />
            <span className="resume">Resume </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
