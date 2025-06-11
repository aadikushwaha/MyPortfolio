import AOS from "aos";
import { useEffect, useRef } from "react";
import Typed from "typed.js";


const Home = () => {
  const el = useRef(null); // Create a ref to attach to the DOM element

  useEffect(() => {
    // Initialize AOS
    AOS.init();

     

    const options = {
      strings: ['NodeJS Developer', 'ReactJS Developer','Web Developer', 'Freelancer'], // Strings to type
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 25, // Backspacing speed in milliseconds
      loop: true, // Loop the typing effect
      cursorChar: '|', // Custom cursor character
    };

    // Initialize Typed.js
    const typed = new Typed(el.current, options);
    
    
    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div  >
      
    <section id="hero" className="hero section dark-background">
   <img
        src="../assets/img/pp.jpg"
        alt="Image"
        data-aos="fade-in"
        className="brightness-[0.1] dark-bg opacity-25 "
      />
   
      <div className="container"  data-aos="fade-up" >  
        <h2>Aditya Kushwaha</h2>
        <p>
          I'm <span className="typed" ref={el}></span>
        </p>
      </div>
    </section>
    </div>
  );
};

export default Home;