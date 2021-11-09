import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
// import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
const App = () => {
  return (
    <div>
      <Header />
      <Intro/>
      {/* <Project />
      <Project />
      <Project /> */}
      <Footer />
    </div>
  );
}

export default App;