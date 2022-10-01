import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFoundPage/NotFound";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teacher" element={<Home />}></Route>
        <Route path="/event" element={<Home />}></Route>
        <Route path="/gallery" element={<Home />}></Route>
        <Route path="/contact" element={<Home />}></Route>
        <Route path="/blog" element={<Home />}></Route>
        <Route path="/admission" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
