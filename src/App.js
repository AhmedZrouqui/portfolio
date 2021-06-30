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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <LatestWorks />
      <Experiences />
      <Proposal />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
