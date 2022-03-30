import { useEffect, useState } from "react";
import "./Portfolio.css";
import demo1 from "../../Assets/images/demo1.png";
import demo2 from "../../Assets/images/demo2.png";
import demo3 from "../../Assets/images/demo3.png";
import demo4 from "../../Assets/images/demo4.png";
import demo5 from "../../Assets/images/demo5.png";
import demo6 from "../../Assets/images/demo6.png";
import demo7 from "../../Assets/images/demo7.png";
import demo8 from "../../Assets/images/demo8.png";
import { AiFillGithub } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const Portfolio = () => {

const [letterClass, setLetterClass] = useState('text-animate');
const portfolioArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];

useEffect(() => {
  return setTimeout (() => {
    setLetterClass('text-animate-hover')
  }, 2000)
}, [])

  return (
    <div className="portfolio">
      <div className="p-text">
        <AnimatedLetters letterClass={letterClass} 
        strArray={portfolioArray}
        idx={1} />
        <p className="port-desc">
          Here are some of my PROJECTS <BsLaptop />
        </p>
      </div>

      <div className="project">

      <div className="p">
          <div className="p-header">Days to Remember</div>
          <a
            href="https://days-to-remember.herokuapp.com/"
            target="_blank"
          >
            <img className="demo-img" src={demo7} />
          </a>
          <p>Our app reminds you of your friends' and family's birthdays, anniversaries, and other important dates. It has a simple design focusing on what truly matters. You'll never forget an important day anymore.</p>
          <a
            href="https://github.com/kabaothao/Days-to-Remember"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="p">
          <div className="p-header">Dream Vision Gallery</div>
          <a
            href="https://dream-vision-gallery.herokuapp.com/"
            target="_blank"
          >
            <img className="demo-img" src={demo8} />
          </a>
          <p>This is my personal gallery. All of the photos were made by me. This app is still in production. I'm planning on adding more photos and create a back-end for the application. In the future users will be able to create an acount to rate photos.</p>
          <a
            href="https://github.com/AlenaReh/Dream-Vision-Gallery"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="p">
          <div className="p-header">Christmas Countdown</div>
          <a
            href="https://alenareh.github.io/Christmas-Countdown/"
            target="_blank"
          >
            <img className="demo-img" src={demo1} />
          </a>
          <p>This is a fun app that does the Christmas countdown.</p>
          <a
            href="https://github.com/AlenaReh/Christmas-Countdown"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="p">
          <div className="p-header">Bingo</div>
          <a href="https://bingoheroku.herokuapp.com/login" target="_blank">
            <img className="demo-img" src={demo2} />
          </a>
          <p>
            This Bingo app is a great way to take your mind off a stressfull
            day, have fun with a group of friends, or try your luck solo. The
            live chat is also available throughout the game.
          </p>
          <a
            href="https://github.com/kabaothao/Bingo"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="p">
          <div className="p-header">Save Well</div>
          <a href="https://save-well.herokuapp.com/" target="_blank">
            <img className="demo-img" src={demo3} />
          </a>
          <p>
            Budget Tracker application is a Progressive Web Application (PWA)
            that allows both online and offline access and functionality. With
            this application users can track their withdrawals and deposits with
            or without a data/internet connection.
          </p>
          <a
            href="https://github.com/AlenaReh/SaveWell"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="p">
          <div className="p-header">Camping Forecast</div>
          <a
            href="https://loganhild.github.io/forecast-with-a-chance-of-camping/"
            target="_blank"
          >
            <img className="demo-img" src={demo4} />
          </a>
          <p>
            Our web application is aimed for easy process of locating
            recreational outdoor facilities with a specific zip code. It also pulls the current 7-day forecast and allows users to plan their outdoor activities accordingly.
          </p>
          <a
            href="https://github.com/LoganHild/forecast-with-a-chance-of-camping"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="p">
          <div className="p-header">Planner</div>
          <a href="https://alenareh.github.io/Planner/" target="_blank">
            <img className="demo-img" src={demo5} />
          </a>
          <p>
            This is a calendar application that allows a user to save
            events for each hour of the day. This app will run in the browser
            and feature dynamically updated HTML and CSS powered by jQuery.
          </p>
          <a
            href="https://github.com/AlenaReh/Planner"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="p">
          <div className="p-header">Stay Fit</div>
          <a
            href="https://stay-fit-fitness-tracker.herokuapp.com/"
            target="_blank"
          >
            <img className="demo-img" src={demo6} />
          </a>
          <p>
            This is a simple workout tracker that allows user to view, create,
            and track daily workouts.
          </p>
          <a
            href="https://github.com/AlenaReh/Stay-Fit"
            style={{ color: "#152835" }}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
