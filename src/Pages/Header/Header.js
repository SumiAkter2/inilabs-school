import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="flex justify-around  items-center navbar-container">
        <div>
          <img
            className="navbar-logo ml-12"
            src="https://i.ibb.co/WH6YJzm/Group-1245.png"
            alt="logo"
          />
        </div>
        <div>
          <ul className=" navbar ">
            <li>
              <a href="/" className="nav">
                Home
              </a>
            </li>

            <li>
              <a href="/about " className="nav">
                About
              </a>
            </li>

            <li>
              <a href="/" className="nav">
                Teacher
              </a>
            </li>

            <li>
              <a href="/" className="nav">
                Event
              </a>
            </li>

            <li>
              <a href="/" className="nav">
                Gallery
              </a>
            </li>

            <li>
              <a href="/" className="nav">
                Contact
              </a>
            </li>

            <li>
              <a href="/" className="nav">
                Blogs
              </a>
            </li>

            <li>
              <a href="/" className="nav">
                Admission
              </a>
            </li>

            <li className="login nav">
              <img
                src="https://i.ibb.co/Y2XwXKY/Rectangle-6-2.png"
                alt="login-logo"
              />
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
