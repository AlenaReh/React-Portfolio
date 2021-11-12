import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import {
  BsFillChatDotsFill,
  BsFillEnvelopeFill,
  BsFillPersonFill,
} from "react-icons/bs";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [text, setText] = useState("");

  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setText(value);
    }
    return;

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked");

    // Checking to see if inputs are empty. If so we set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage('Name is a required field!');
    } else if (!email) {
      setErrorMessage('Email is a required field!');
    } else if (!text) {
      setErrorMessage('Message is a required field!');
    } else {setErrorMessage("");
  }

    const isValid = validateEmail(email);

    if (!isValid) {
      setErrorMessage("Please, eneter a valid email!");
    } 

    setUserName("");
    setEmail("");
    setText("");
  };

  return (
    <div className="contact-wrapper">
      <Container className="contact-container">
        <h1 className="contact-text">Would you like to connect?</h1>
        <Form className="contact-form">
          <Form.Group controlId="form.Name">
            <Form.Label className="contact-title">
              Name <BsFillPersonFill />
            </Form.Label>
            <Form.Control
              className="contact-input"
              type="text"
              placeholder="Enter name"
              onChange={handleInputChange}
              value={userName}
              name="userName"
            />
          </Form.Group>
          <Form.Group controlId="form.Email">
            <Form.Label className="contact-title">
              Email address <BsFillEnvelopeFill />
            </Form.Label>
            <Form.Control
              className="contact-input"
              type="email"
              placeholder="name@example.com"
              onChange={handleInputChange}
              value={email}
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            <Form.Label className="contact-title">
              Message <BsFillChatDotsFill />
            </Form.Label>
            <Form.Control
              className="contact-input"
              as="textarea"
              rows={3}
              onChange={handleInputChange}
              value={text}
              name="text"
            />
          </Form.Group>
          <Button
            className="contact-submit"
            as="input"
            type="submit"
            value="Submit"
            onClick={handleFormSubmit}
          />{" "}
        </Form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </Container>

    </div>
  );
}

export default Contact;
