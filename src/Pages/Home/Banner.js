import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="  banner-content ">
        {/* ********************banner content*************** */}
        <div
          className="hero  "
          style={{
            backgroundImage: `url("https://i.ibb.co/jhCzQzX/Rectangle-1.png")`,
            height: "799px",
          }}
        >
          <p className="top-text">A tradition since 2002</p>
          <div className="  text-white ">
            {/*--------------- banner-content ---------------*/}
            <div>
              <div className="flex justify-between items-center banner-left-content ">
                <div className=" w-1/2">
                  {/* -----------top-content--------- */}
                  <div className=" top-horizontal-line ">
                    <img
                      src="https://i.ibb.co/wswNXN2/Line-1.png"
                      alt="line-img"
                    />
                  </div>
                  {/*--------------- banner-left-content ---------------*/}
                  <h1>
                    Offering Bright <br /> <span>Futures</span>
                  </h1>
                  <p>
                    iNiLabs school graduates are studding in the world
                    <span>most prestigious universities</span>
                  </p>
                  <button className="apply-btn">Apply Now</button>
                </div>
                {/* ----------------banner-right-content------ */}
                <div className="lg:flex  justify-center items-start w-1/2 banner-right-content">
                  <button className="circle-btn">
                    <img
                      src="https://i.ibb.co/Mpcg2X1/Ellipse-1.png"
                      alt="btn-logo"
                    />
                  </button>
                  <div className="grid ml-2">
                    <h4>iNiLabs School</h4>
                    <h3 className="text-xl font-bold">
                      CAMPUS <br />
                      <span>TOUR</span>
                    </h3>
                    <p className="text-sm">WATCH VIDEO (6 MIN)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -----------horizontal-line for bottom------------------- */}
          <div className="flex   horizontal-line">
            <img
              className="mr-4 line-1"
              src="https://i.ibb.co/wswNXN2/Line-1.png"
              alt="line-img"
            />
            <img
              className="mr-4 line-2"
              src="https://i.ibb.co/KxY7Hmm/Line-2.png"
              alt="line-img"
            />
            <img
              className="mr-4 line-3"
              src="https://i.ibb.co/wswNXN2/Line-1.png"
              alt="line-img"
            />
          </div>
        </div>
      </div>

      {/* --------after banner card content-------------- */}
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 w-full">
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
      </div>
    </div>
  );
};

export default Banner;
