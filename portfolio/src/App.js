import React from "react";
import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro';
// import Project from './components/Project/Project';
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      {/* <Project />
      <Project />
      <Project /> */}
      <Contact/>
      <Resume/>
      <Footer />
    </div>
  );
};

export default App;
