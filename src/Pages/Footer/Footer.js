import React from "react";
import { Link } from "react-router-dom";
// import a from "../a/a";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <h6>
        iNiLabs school is an independent, non-governmental organization,
        established to provide hight-quality education to local and expatriate
        communities in Bangladesh and United States Of America.
      </h6>
      <div className="footer-location">
        <img src="https://i.ibb.co/z64jkXQ/Vector-13.png" alt="" />
        <p>Plot-25, Road-05, Block-A, Mirpur-2,Dhaka, Bangladesh</p>
      </div>
      <div className="footer-phone">
        <img src="https://i.ibb.co/FVHZvLg/Vector-14.png" alt="" />
        <p>01236547892</p>
      </div>

      <div className="list-item">
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Get Result</a>
          </li>

          <li>
            <a>Event</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>About School</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="follow-content">
        <h2>Follow Us</h2>
        <div className="follow-logo flex">
          <img
            className="img-1"
            src="https://i.ibb.co/zGwtkNd/Vector-3.png"
            alt="social-logo"
          />
          <svg
            className="img-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="48"
            fill="#FFFFFF"
          >
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
          </svg>
          <img
            className="img-3"
            src="https://i.ibb.co/8XR3Bdw/Vector-4.png"
            alt="social-logo"
          />
          <img
            className="img-4"
            src="https://i.ibb.co/QPsFDH4/Vector-5.png"
            alt="social-logo"
          />
          <img
            className="img-5"
            src="https://i.ibb.co/LPXsW3M/Vector-6.png"
            alt="social-logo"
          />
        </div>

        <p>&copy; 2022 iNiLabs School</p>
      </div>
    </div>
  );
};

export default Footer;
