import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import OperaHero from "./OperaHero";
import Projects from "./Projects";
import CV from "./CV";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<OperaHero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
