import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/jhCzQzX/Rectangle-1.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <img src="https://i.ibb.co/wswNXN2/Line-1.png" alt="" />
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
