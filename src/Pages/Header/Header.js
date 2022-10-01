import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <a href="/">
    //       <img
    //         className="navbar-logo ml-12"
    //         src="https://i.ibb.co/WH6YJzm/Group-1245.png"
    //         alt="logo"
    //       />
    //     </a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal p-0 ml-12">
    //       <li>
    //         <CustomLink>Home</CustomLink>
    //       </li>
    //       <li>
    //         <Link>About</Link>
    //       </li>
    //       <li>
    //         <CustomLink>Teacher</CustomLink>
    //       </li>
    //       <li>
    //         <CustomLink>Event</CustomLink>
    //       </li>
    //       <li>
    //         <CustomLink>Gallery</CustomLink>
    //       </li>
    //       <li>
    //         <CustomLink>Contact</CustomLink>
    //       </li>
    //       <li>
    //         <CustomLink>Blogs</CustomLink>
    //       </li>
    //       <li>
    //         <CustomLink>Admission</CustomLink>
    //       </li>
    //       <li>
    //         <a href="">Log In</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     {/* <CustomLink className="btn">Get started</CustomLink> */}
    //     <div className="dropdown dropdown-end">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <CustomLink>Home</CustomLink>
    //         </li>
    //         <li>
    //           <CustomLink>About</CustomLink>
    //         </li>
    //         <li>
    //           <CustomLink>Teacher</CustomLink>
    //         </li>
    //         <li>
    //           <CustomLink>Event</CustomLink>
    //         </li>
    //         <li>
    //           <CustomLink>Gallery</CustomLink>
    //         </li>
    //         <li>
    //           <CustomLink>Contact</CustomLink>
    //         </li>
    //         <li>
    //           <CustomLink>Blogs</CustomLink>
    //         </li>
    //         <li>
    //           <CustomLink>Admission</CustomLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div>
        <img
          className="navbar-logo ml-12"
          src="https://i.ibb.co/WH6YJzm/Group-1245.png"
          alt="logo"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
