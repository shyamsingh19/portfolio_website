import React from "react";
import "./intro.css";
import bg from "../../assets/Polish_20231216_000305141.png";
import btnimg from "../../assets/download icon.png";
import { Link } from "react-scroll";

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
          I am skilled and passionate web developer with experience in <br />
          creating visually appearing and user freindly websites.{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/1C1Dh1QImG0aqQ0-Tx0a3uA6ivHVf4iBq/view?usp=sharing"
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
