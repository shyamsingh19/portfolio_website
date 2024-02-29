import React, { useState } from "react";
import "./project.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import githublive from "../../assets/githublive.png";
import live from "../../assets/live.png";

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="Projects">
      <h2 className="projecttitle">Projects</h2>

      <span className="projectcaption">
        An Array of my Work showcasing my Diverse and creative Projects.
      </span>

      <div className="projectImgs">
        <div className="prj2">
          <img src={project2} alt="" className="projectimg" />

          <span className="projectdesc">
            <h5 className="prjtext">HOSPITAL WEBSITE</h5>
            <p className="prjdetail">
              Get a glimpse of my Hospital Website project! Shaping a sleek,
              responsive frontend. I ensured smooth transitions, React Router
              navigation, and EmailJS integration for seamless client-side
              communication. Key sections like Home, About, Specialties,
              Gallery, and Doctors provide a comprehensive online presence.
            </p>

            <span className="links">
              <a
                href="https://github.com/shyamsingh19/Rao-hospital"
                rel="noreferrer"
                target="_blank"
                className="iconlinkcontainer"
              >
                <img src={githublive} alt="" className="linkicon" />
                Github
              </a>
              <a
                href="https://raolokramcharitabletrust.com/"
                rel="noreferrer"
                target="_blank"
                className="iconlinkcontainer"
              >
                <img src={live} alt="" className="linkicon" />
                Live
              </a>
            </span>
          </span>
        </div>

        <div className="prj1">
          <img src={project1} alt="" className="projectimg" />

          <span className="projectdesc">
            <h5 className="prjtext">PORTFOLIO WEBSITE</h5>
            <p className="prjdetail">
              Check out my Personal Portfolio website! Created using React, it
              showcases my skills, projects, interests, and technical expertise.
              Featuring an integrated Nodemailer for direct messaging, visitors
              can easily connect and send messages to the provided email
              address.
            </p>
            <span className="links">
              <a
                href="https://github.com/shyamsingh19/portfolio_website"
                rel="noreferrer"
                target="_blank"
                className="iconlinkcontainer"
              >
                <img src={githublive} alt="" className="linkicon" />
                Github
              </a>

              <a
                href="https://shyam-portfolio-web.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="iconlinkcontainer"
              >
                <img src={live} alt="" className="linkicon" />
                Live
              </a>
            </span>
          </span>
        </div>

        {showMore && (
          <div className="prj3">
            <img src={project3} alt="" className="projectimg" />

            <span className="projectdesc">
              <h5 className="prjtext">SORTING VISUALISER</h5>
              <p className="prjdetail">
                Explore my Sorting Visualizer project! Using HTML, CSS, and
                Vanilla JavaScript, I've crafted an interactive tool
                illustrating sorting algorithms like Merge sort, Quick sort,
                Selection sort, Bubble sort, and Insertion sort. You can
                customize the speed and number of values for a hands-on
                experience!
              </p>

              <span className="links">
                <a
                  href="https://github.com/shyamsingh19/sorting-visualiser"
                  rel="noreferrer"
                  target="_blank"
                  className="iconlinkcontainer"
                >
                  <img src={githublive} alt="" className="linkicon" />
                  Github
                </a>
                <a
                  href="https://shyamsingh19.github.io/sorting-visualiser/"
                  rel="noreferrer"
                  target="_blank"
                  className="iconlinkcontainer"
                >
                  <img src={live} alt="" className="linkicon" />
                  Live
                </a>
              </span>
            </span>
          </div>
        )}
      </div>

      <button className="projectBtn" onClick={toggleShowMore}>
        {showMore ? "See Less" : "See More"}
      </button>
    </section>
  );
};

export default Project;
