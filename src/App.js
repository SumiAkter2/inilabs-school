import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
