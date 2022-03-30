import { useEffect, useState } from "react";
import "./Resume.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Container, Row, Button } from "react-bootstrap";
import resume from "../../Assets/docs/PORT_RESUME.pdf";
import cert from "../../Assets/docs/CERT.pdf";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const Resume = () => {

const [letterClass, setLetterClass] = useState('text-animate');
const nameArray = ['A', 'L', 'E', 'N', 'A', ' ', 'R', 'E', 'H', 'B', 'E', 'R', 'G', 'E', 'R'];

useEffect(() => {
  return setTimeout (() => {
    setLetterClass('text-animate-hover')
  }, 2000)
}, [])

  return (
    <div className="resume-wrapper">
      <Container fluid className="resume-container">
        <Row>
          <Button className="resume-btn" href={resume} target="_blank">
            Download My Resume
            <AiOutlineCloudDownload />
          </Button>
        </Row>
        <br />
        <Row>
          <Button className="resume-btn" href={cert} target="_blank">
            Download My Full Stack Web Development Certificate
            <AiOutlineCloudDownload />
          </Button>
        </Row>

        <div className="resume-div">
          {/* <h2 className="resume-name">ALENA REHBERGER</h2> */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={1}
          />

          <br />
          <p className="resume-items">
            Passionate full stack web developer who can grab client’s attention
            with clean, simple, and stunning web content. Earned a certificate
            in MERN Stack Web Development from the University of Minnesota
            Coding Boot Camp. I love working with HTML, CSS, JavaScript,
            Node.js, React.js, and other modern technologies. Strengths in
            creativity, teamwork, and building projects from ideation to
            execution.
            <br />
            <br />
            Looking to bring my attention to detail, technical skills, interests
            in photography, psychology, and education to a company to grow and
            become a valuable asset.
            <br />
            <br />
            <div className="alternate">Currently learning C#.</div>
          </p>
          <br />

          <h3 className="resume-skills">TECHNICAL SKILLS</h3>
          <br />
          <div className="columns">
            <li className="alternate">JavaScript ES6+</li>
            <li>CSS</li>
            <li className="alternate">HTML</li>
            <li>Node JS</li>
            <li className="alternate">JQuery</li>
            <li>Moment.js</li>
            <li className="alternate">Node.js</li>
            <li>Bootstrap</li>
            <li className="alternate">Bulma</li>
            <li>Adobe Photoshop</li>
            <li className="alternate">Handlebars.js</li>
            <li>APIs</li>
            <li className="alternate">NPM</li>
            <li>Jest</li>
            <li className="alternate">RegEx</li>
            <li>Express</li>
            <li className="alternate">Sequelize</li>
            <li>MySQL</li>
            <li className="alternate">MongoDB</li>
            <li>React</li>
            <li className="alternate">React Native</li>
            <li>JWT</li>
            <li className="alternate">GraphQL</li>
            <li>C#</li>
            <li className="alternate">Socket.IO</li>
            <li>Heroku</li>
            <li className="alternate">Redux</li>
            <li>Twilio</li>
            <li className="alternate">Robo 3T</li>
            <li>MySQLWorkbench</li>
            <li className="alternate">Insomnia</li>
            <li>GitHub</li>
            <li className="alternate">Slack</li>
            <li>Zoom</li>
          </div>
          <br />
          <br />
          <h3 className="resume-skills">SOFT SKILLS</h3>
          <br />
          <div className="columns">
            <li className="alternate">Patience</li>
            <li>Open-mindness</li>
            <li className="alternate">Adaptability</li>
            <li>Teamwork</li>
            <li className="alternate">Emotional Intelligence</li>
            <li>Creativity</li>
            <li className="alternate">Problem Solving</li>
            <li>Accountability</li>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
