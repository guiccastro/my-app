import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Banner from "./components/Banner";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Academic from "./components/Academic";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Experiences />
      <Academic />
      <Projects />
      <Languages />
      <Competences />
      <Certificates />
      <Contact />
    </>
  );
};

export default App;
