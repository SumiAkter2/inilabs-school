import React from "react";
import "./Principle.css";
const PrinciplePage = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex ">
          {/* image-content */}
          <img
            className="image-container "
            src="https://i.ibb.co/Sytt0tp/Rectangle-16.png"
            alt="university-pic"
          />
          {/*------------principle text-content ---------------*/}
          <div className="principle-text-content">
            <img
              className="mr-4"
              src="https://i.ibb.co/KxY7Hmm/Line-2.png"
              alt="line-img"
            />
            <h1>Wise Words From Principle</h1>
            <p>
              "iNiLabs school is a welcoming Catholic community renowned for its
              integrity and creative learning approaches that bring out the best
              in boys. Our rich Salesian charism underpinned by the educational
              principles of founder. St John Bosco, provides the foundation of a
              future focused pedagogical vision."
            </p>
            <div className="Principle-name-content">
              <img
                className="mr-4"
                src="https://i.ibb.co/KxY7Hmm/Line-2.png"
                alt="line-img"
              />
              <h3>Jonathon Doe</h3>

              <p className="principle">Principle, iNiLabs School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinciplePage;
