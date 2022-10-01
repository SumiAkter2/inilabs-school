import React from "react";
import About from "../About/About";
import Apply from "../ApplyPage/Apply";
import Footer from "../Footer/Footer";
import PrinciplePage from "../PrinciplePage/PrinciplePage";
import Subscribe from "../Subscribe/Subscribe";

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
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
