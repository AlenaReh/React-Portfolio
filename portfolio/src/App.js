import React from 'react';
import Header from './components/Header';
import Intro from './components/intro/Intro';
import Project from './components/Project';
import Footer from './components/Footer';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Intro/>
      {/* <Project />
      <Project />
      <Project />
      <Footer /> */}
    </div>
  );
}

export default App;