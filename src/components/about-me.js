import React from "react";
import "./about-me.css";
import Img from "gatsby-image";


const AboutMe = ({ profileImg, hobbyImgs }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Profile image"
              alt="Daniel Headshot"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h4>A Little About Me</h4>
            <p>
              My name is Daniel Marshall and I am a Realtor in Dallas, Tx studying full stack web development.
            </p>
            
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-4 col-lg-4 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, HTML5, CSS3,
                jQuery, Bootstrap, NodeJS
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 ">
            <div className="box">
              <h5>Currently Learning</h5>
              <p>
                ReactJS &
                 NodeJS
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-6 ">
            <div className="box">
              <h5>My Resume</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
