import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      {/* -----------about card-container---- */}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          {/* image-content */}
          <img
            className="img-container "
            src="https://i.ibb.co/SxtTGyz/Rectangle-11.png"
            alt="university-pic"
          />
          {/* text-content */}
          <div className="text-content">
            <img
              className="mr-4"
              src="https://i.ibb.co/KxY7Hmm/Line-2.png"
              alt="line-img"
            />
            <h1>About School</h1>
            <p>
              iNiLabs school is an independent, non-governmental organization,
              established to provide hight-quality education to local and
              expatriate communities in Bangladesh and United States Of America.
            </p>
            <button className="learn-more-btn ">Learn More</button>
          </div>
        </div>
      </div>
      {/* --------count-------------------- */}
      <div className="count-container ">
        <div className="count-number">
          <h1>34</h1>
          <p>Teachers</p>
        </div>
        <div className="count-number">
          <h1>2500+</h1>
          <p>Students</p>
        </div>
        <div className="count-number">
          <h1>1500+</h1>
          <p>Graduates</p>
        </div>
      </div>
    </div>
  );
};

export default About;
