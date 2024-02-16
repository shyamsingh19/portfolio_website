import React from "react";
import "./project.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import githublive from "../../assets/githublive.png";
import live from "../../assets/live.png";

const project = () => {
  return (
    <section id="Projects">
      <h2 className="projecttitle">Projects</h2>

      <span className="projectcaption">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita!
        Lorem ipsum dolor sit amet.
      </span>

      <div className="projectImgs">
        <div className="prj1">
          <img src={project1} alt="" className="projectimg" />

          <span className="projectdesc">
            <h5 className="prjtext">PORTFOLIO WEBSITE</h5>
            <p className="prjdetail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              iusto dolore similique consequatur odio ad quasi aliquid quaerat
              officia. Sapiente? Lorem ipsum dolor sit iusto dolore similique
              consequatur odio ad quasi aliquid quaerat officia. Sapiente?
            </p>
            <span className="links">
              <a href="https://github.com/shyamsingh19/portfolio_website" target="_blank" className="iconlinkcontainer">
                <img src={githublive} alt="" className="linkicon" />
                Github
              </a>

              <a href="https://shyam-portfolio-web.vercel.app/" target="_blank" className="iconlinkcontainer">
                <img src={live} alt="" className="linkicon" />
                Live
              </a>
            </span>
          </span>
        </div>

        <div className="prj2">
          <img src={project2} alt="" className="projectimg" />

          <span className="projectdesc">
            <h5 className="prjtext">SORTING VISUALISER</h5>
            <p className="prjdetail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              iusto dolore similique consequatur odio ad quasi aliquid quaerat
              officia. Sapiente? Lorem ipsum dolor sit iusto dolore similique
              consequatur odio ad quasi aliquid quaerat officia. Sapiente?
            </p>

            <span className="links">
              <a href="www" className="iconlinkcontainer">
                <img src={githublive} alt="" className="linkicon" />
                Github
              </a>
              <a href="www" className="iconlinkcontainer">
                <img src={live} alt="" className="linkicon" />
                Live
              </a>
            </span>
          </span>
        </div>
      </div>

      <button className="projectBtn">See more</button>
    </section>
  );
};

export default project;
