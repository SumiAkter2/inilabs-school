import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div
        className="  banner-content "
        style={{
          backgroundImage: 'url("https://i.ibb.co/jhCzQzX/Rectangle-1.png" )',
        }}
      >
        {/* ********************banner content*************** */}
        <div className="left-content ">
          <div className="top-content ">
            <img src="https://i.ibb.co/wswNXN2/Line-1.png" alt="" />
            <h2 className="p"> A TRADITION SINCE 2002 </h2>
          </div>
          <h1>Offering Bright Future</h1>
          <p>
            iNiLabs School graduates are studying in the world’s most
            prestigious universities.
          </p>
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="right-content"></div>
      </div>

      {/* --------after banner card content-------------- */}
      {/* <div className="grid  md:grid-cols-3 lg:grid-cols-4 w-full">
        <div className="card-1">
          <img src="https://i.ibb.co/rm3xyz9/Compound-Path.png" alt="icon" />
          <h1>
            Educational in English:
            <br />
            <span>
              Cambridge international programme and qualified native english
              speaking teachers
            </span>
          </h1>
        </div>
        <div className="card-2">
          <img src="https://i.ibb.co/0GPk0QF/Vector.png" alt="icon" />
          <h1>
            Educational in English:
            <br />
            <span>
              Cambridge international programme and qualified native english
              speaking teachers
            </span>
          </h1>
        </div>
        <div className="card-3">
          <img src="https://i.ibb.co/qDFfdKG/Vector-2.png" alt="icon" />
          <h1>
            Educational in English:
            <br />
            <span>
              Cambridge international programme and qualified native english
              speaking teachers
            </span>
          </h1>
        </div>
        <div className="card-4">
          <img src="https://i.ibb.co/nn4z2gN/Vector-2.png" alt="icon" />
          <h1>
            Educational in English:
            <br />
            <span>
              Cambridge international programme and qualified native english
              speaking teachers
            </span>
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
