import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './Contact.css'

function Contact() {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [text, setText] = useState("");

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
    // alert(`Hello ${userName} ${lastName} from ${company}!`);
    setUserName("");
    setEmail("");
    setText("");
  };

  return (

    <Container className='contact-container'>
      <Form className='contact-form'>
        <Form.Group controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control className='contact-input'
            type="text"
            placeholder="Enter name"
            onChange={handleInputChange}
            value={userName}
            name="userName"
          />
        </Form.Group>
        <Form.Group controlId="form.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='contact-input'
            type="email"
            placeholder="name@example.com"
            onChange={handleInputChange}
            value={email}
            name="email"
          />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
          <Form.Label>Message</Form.Label>
          <Form.Control className='contact-input' as="textarea" rows={3} onChange={handleInputChange} value={text} name="text" />
        </Form.Group>
        <Button className='contact-submit'
          as="input"
          type="submit"
          value="Submit"
          onClick={handleFormSubmit}
        />{" "}
      </Form>
    </Container>

  );
}

export default Contact;
