import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Academic from "./components/Academic";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Competences from "./components/Competences";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
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
