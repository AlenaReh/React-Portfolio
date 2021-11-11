import React from 'react';
import './Portfolio.css';
import demo1 from'../../Assets/images/demo1.png';
import demo2 from'../../Assets/images/demo2.png';
import demo3 from'../../Assets/images/demo3.png';
import demo4 from'../../Assets/images/demo4.png';
import demo5 from'../../Assets/images/demo5.png';
import demo6 from'../../Assets/images/demo6.png';
import {AiFillGithub} from "react-icons/ai";



const Portfolio = () => {
    return (
      <div className="portfolio">
        <div className="p-text">
          <h1 className="port-title">Portfolio</h1>
          <p className="port-desc">Descriptive text</p>
        </div>
        <div className="project">
          <div className="p">
            <div className="p-header">Christmas Countdown</div>
            <a
              href="https://alenareh.github.io/Christmas-Countdown/"
              target="_blank"
            >
              <img className="demo-img" src={demo1} />
            </a>
            <p>
              This is a simple but fun app that does the Christmas countdown.
            </p>
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
            <a
              href="https://save-well.herokuapp.com/"
              target="_blank"
            >
              <img className="demo-img" src={demo3} />
            </a>
            <p>
              Budget Tracker application is a Progressive Wb Application (PWA)
              that allows both online and offline access and functionality. With
              this application users can track their withdrawals and deposits
              with or without a data/internet connection.
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
              recreational outdoor facilities with a specific zip code. At the
              same time, it pulls the current 7-day forecast. It allows users to
              be aware of the weather conditions and plan their outdoor
              activities accordingly.
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
            <a
              href="https://alenareh.github.io/Planner/"
              target="_blank"
            >
              <img className="demo-img" src={demo5} />
            </a>
            <p>
              This is a simple calendar application that allows a user to save
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
}

export default Portfolio;