import React from "react";
import CustomLink from "../CustomLink/CustomLink";
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
              <CustomLink to="/" className="nav">
                Home
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/about " className="nav">
                About
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/teacher" className="nav">
                Teacher
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/event" className="nav">
                Event
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/gallery" className="nav">
                Gallery
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/contact" className="nav">
                Contact
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/blog" className="nav">
                Blogs
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/admission" className="nav">
                Admission
              </CustomLink>
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
