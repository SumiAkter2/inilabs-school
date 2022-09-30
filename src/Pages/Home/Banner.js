import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div>
        {/* ********************banner content*************** */}
        <div
          className="hero banner-img "
          style={{
            backgroundImage: `url("https://i.ibb.co/jhCzQzX/Rectangle-1.png")`,
            height: "799px",
          }}
        >
          <div className="  text-white ">
            {/*--------------- banner-content ---------------*/}
            <div className="  banner-content ">
              <div className="flex justify-between items-center banner-left-content ">
                <div className=" w-1/2">
                  {/* -----------top-content--------- */}
                  <div className=" top-horizontal-line ">
                    <img
                      src="https://i.ibb.co/wswNXN2/Line-1.png"
                      alt="line-img"
                    />
                    <p className="top-content">A tradition since 2002</p>
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
          <div className="flex justify-center items-center  horizontal-line">
            <img
              className="mr-4"
              src="https://i.ibb.co/wswNXN2/Line-1.png"
              alt="line-img"
            />
            <img
              className="mr-4"
              src="https://i.ibb.co/KxY7Hmm/Line-2.png"
              alt="line-img"
            />
            <img
              className="mr-4 "
              src="https://i.ibb.co/wswNXN2/Line-1.png"
              alt="line-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
