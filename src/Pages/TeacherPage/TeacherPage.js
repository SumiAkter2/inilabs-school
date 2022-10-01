import React from "react";
import "./Teacher.css";
const TeacherPage = () => {
  return (
    <div>
      <div className="teacher-container">
        <img src="https://i.ibb.co/KxY7Hmm/Line-2.png" alt="icon" />
        <h1>Our Teacher</h1>
        <img
          className="arrow-1"
          src="https://i.ibb.co/s5sGVdD/Vector-5.png"
          alt="icon"
        />
        <img
          className="arrow-2"
          src="https://i.ibb.co/wBHVbdj/Vector-4.png"
          alt="icon"
        />
      </div>
      <div className="teacher-content flex">
        <div className="teacher-1">
          <img
            src="https://i.ibb.co/GdpqH3N/Rectangle-23.png"
            alt="teacher-img"
          />
          <h1>Cooper Donin</h1>
          <p>Head of Operation</p>
          <div className="social-logo">
            <img
              src="https://i.ibb.co/zGwtkNd/Vector-3.png"
              alt="social-icon"
            />
            <img
              src="https://i.ibb.co/FwFPwv4/Vector-7.png"
              alt="social-icon"
            />
            <img
              src="https://i.ibb.co/QPsFDH4/Vector-5.png"
              alt="social-icon"
            />
            <img
              src="https://i.ibb.co/TBTFdth/Vector-6.png"
              alt="social-icon"
            />
          </div>
        </div>
        <div className="teacher-2">
          <img
            src="https://i.ibb.co/pZbnHnP/Rectangle-24.png"
            alt="teacher-img"
          />
          <h1>Anika Baptista</h1>
          <p>Arts Teacher</p>
        </div>
        <div className="teacher-3">
          <img
            src="https://i.ibb.co/r7BxSRb/Rectangle-25.png"
            alt="teacher-img"
          />
          <h1>Kaiya Bator</h1>
          <p>Spanish Teacher</p>
        </div>
      </div>
      <div className="see-teacher-content">
        <p>See Teacher</p>
        <img src="https://i.ibb.co/wBHVbdj/Vector-4.png" alt="icon" />
      </div>
    </div>
  );
};

export default TeacherPage;
