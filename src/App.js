import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
    </BrowserRouter>
  );
}
