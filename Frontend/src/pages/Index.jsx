import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
    
  <body id="main" className=
  " index-page">
      
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Resume />
            <Projects />
            <Services />
            <Contact />
          </main>
          <Footer/>
        </body>
      
    </>
      
  );
};

export default Index;