import "./styles/global.css";
import Header from "./components/Header";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import LatestWorks from "./components/LatestWorks";
import Experiences from "./components/Experiences";
import Proposal from "./components/Proposal";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Hero} />
        <AboutMe id="about-me" name="about-me" />
        <Services id="services" name="services" />
        <LatestWorks id="projects" />
        <Experiences />
        <Proposal />
        <ContactMe id="contact" name="contact" />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
