import React, { useState, useEffect } from "react";
// import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import { keepTheme } from './utils/themes';
import "./components/index.css";

// const LightTheme = {
//   pageBackground: "red",
//   titleColor: "#dc658b",
//   tagLineColor: "black"
// };
// const DarkTheme = {
//   pageBackground: "blue",
//   titleColor: "lightpink",
//   tagLineColor: "lavender"
// }
// const themes = {
//   light: LightTheme,
//   dark: DarkTheme,
// }

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
const App = () => {
  // const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState('Intro');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Intro') {
      return <Intro />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
 
  useEffect(() => {
    keepTheme()
  })

  return (
    <div>

    {/* We are passing the currentPage from state and the function to update it */}
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
    <Footer/>

  </div>
  );
};

export default App;
