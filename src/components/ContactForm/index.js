import React from "react";
import "./contactForm.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <form
          action="https://formspree.io/xrgozoyy"
          method="POST"
          className="contactForm"
        >
          <div id="errormessage"></div>
          <div className="row">
            <div className="uk-form-controls">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="uk-input"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
              </div>
            </div>
            <div className="uk-margin">
              <div className="">
                <input
                  type="email"
                  className="uk-input"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
              </div>
            </div>
            <div className="uk-margin">
              <input
                type="text"
                className="uk-input"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              />
            </div>
            <div className="uk-margin">
              <div className="form-group">
                <textarea
                  className="uk-textarea"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <button id="submitBtn" className="uk-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
