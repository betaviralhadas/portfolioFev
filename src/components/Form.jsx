import React, { useRef, useState } from "react";
import "../style/Components/_Form.scss";
import emailJs from "@emailjs/browser";

const Form = ({ onSuccess }) => {
  const form_send = useRef();
  const [currentMessage, setCurrentMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailValidation = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const nameValidation = (name) => {
    const nameRegex = /^[a-zA-Z-\s]+$/;
    return nameRegex.test(name);
  };

  const configurationEmail = async (e) => {
    e.preventDefault();

    if (name === "" || !nameValidation(name)) {
      document.querySelector(".error_name").innerHTML = "Invalid name";
    } else if (email === "" || !emailValidation(email)) {
      document.querySelector(".error_email").innerHTML = "Enter a valid email";
    } else if (message.length < 20) {
      document.querySelector(".error_message").innerHTML = "Message should be at least 20 characters long";
    } else {
      await emailJs
        .sendForm(
          "service_8ac0u1o",
          "template_9bspzc6",
          form_send.current,
          "uC0mcFhJ6_FUtSOMY"
        )
        .then((rest) => {
          setCurrentMessage(true);
          onSuccess();
          setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
            document.querySelector(".error_name").innerHTML = "";
            document.querySelector(".error_email").innerHTML = "";
            document.querySelector(".error_message").innerHTML = "";
          }, 1500); //1.5 segundos de atraso,para limpar os dados dos campos do form apos envio
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="contact">
      <h2 className="form_title">Got a question or proposal?</h2>
      <h3 className="form_subtitle">Send me an email...</h3>
      <form className="form" ref={form_send} onSubmit={configurationEmail}>
        <div className="form_fields">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="error_name"></span>
        </div>
        <div className="form_fields">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error_email"></span>
        </div>
        <div className="form_message_field">
          <label htmlFor="message">Message</label>
          <textarea
            className="message"
            id="message"
            type="text"
            name="message"
            value={message}
            placeholder="Enter a message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className="error_message"></span>
        </div>
        <div className="buttons">
          <button className="button" type="submit">
            Send
          </button>
          <button
            className="button"
            type="reset"
            onClick={() => {
              setName("");
              setEmail("");
              setMessage("");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
