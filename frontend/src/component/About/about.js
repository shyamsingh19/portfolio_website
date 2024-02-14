import React from "react";
import "./about.css";

import webdev from "../../assets/web-dev-final.png";
import programming from "../../assets/programming.png";
import webdesign from "../../assets/website-design_5234318.png";

const about = () => {
  return (
    <>
      <section id="about">
        <span className="aboutTitle">What I do</span>

        <span className="aboutDesc">
          I am a skilled and passionate Web Developer specializing in creating
          web applications. My expertise lies in frontend development, where I
          have worked with HTML, CSS, JavaScript and ReactJS.
        </span>

        <div className="aboutBars">
          <div className="aboutBar">
            <img src={webdev} alt="UIdesign" className="aboutBarImg1" />
            <span className="aboutBarText">
              <h2 className="aboutheading">Web Development</h2>
              <p>
                Proficient in front-end technologies like HTML, CSS, JavaScript
                and React, I strive to create impactful and user-centric
                websites that leave a lasting impression.
              </p>
            </span>
          </div>
          <div className="aboutBar">
            <img src={webdesign} alt="webdesign" className="aboutBarImg" />
            <span className="aboutBarText">
              <h2 className="aboutheading">Web Design</h2>
              <p>
                I bring your design concepts to life, ensuring seamless user
                experience across different devices and browsers.{" "}
              </p>
            </span>
          </div>
          <div className="aboutBar">
            <img src={programming} alt="webdesign" className="aboutBarImg" />
            <span className="aboutBarText">
              <h2 className="aboutheading">Programming</h2>
              <p>
                I am a programmer skilled in various programming languages like
                C and C++. I've honed my about in Data Structures and
                Algorithms(DSA).
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
