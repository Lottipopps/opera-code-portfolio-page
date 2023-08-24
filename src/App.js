import "./App.css";
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
      <OperaHero id="OperaHero" />
      <Projects id="Projects" />
      <CV id="CV" />
      <Contacts id="Contacts" />
      <Footer id="Footer" />
    </div>
  );
}

export default App;
