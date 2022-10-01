import React from "react";
import About from "../About/About";
import Apply from "../ApplyPage/Apply";
import PrinciplePage from "../PrinciplePage/PrinciplePage";
import TeacherPage from "../TeacherPage/TeacherPage";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Apply />
      <PrinciplePage />
      <TeacherPage />
    </div>
  );
};

export default Home;
