// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import "./Contacts.css";
import ContactMe from "./images/contact-me.svg";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xaygolal");
  if (state.succeeded) {
    return <p>Thanks for writing to me! I'll get back to you ASAP.</p>;
  }
  return (
    <div className="Contacts">
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <object
              type="image/svg+xml"
              data={ContactMe}
              aria-labelledby="contact types"
            ></object>
          </div>
        </div>
      </div>
      <h4>Contact form:</h4>
      <form onSubmit={handleSubmit} className="container">
        <div className="row section">
          <label htmlFor="email" id="email-text">
            Email
          </label>
          <input id="email" type="email" name="email" autoComplete="off" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="row section">
          <label htmlFor="message" id="message-text">
            Please write your name and question below
          </label>
          <textarea id="message" name="message" autoComplete="off" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="row section">
          <button type="submit" disabled={state.submitting} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function Contacts() {
  return <ContactForm />;
}
export default Contacts;
