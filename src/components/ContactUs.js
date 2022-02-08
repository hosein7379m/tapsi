import React, { useState, useRef } from "react";
import locationVector from "../assets/image/location.png";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import LoadBar from "./loadbar/LoadBar";

function ContactUs() {
  const form = useRef();
  const [emails, setEmails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loadbar, setLoadBar] = useState(true);
  const enterEmail = (event) => {
    const { name, value } = event.target;
    setEmails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  /* send email with email.js */
  const sendEmail = (e) => {
    e.preventDefault();
    setLoadBar(false);
    emailjs
      .sendForm(
        "service_bjydenb",
        "template_tapsi",
        form.current,
        "user_xjFcizL3Y0T9DQAAfT3Ye"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("!Successful submission");
          if (result.text === "OK") {
            setTimeout(() => {
              setLoadBar(true);
            }, 1000);
          }
        },
        (error) => {
          // console.log(error.text);
          toast.error("Error!Try Again later");
          if (error) {
            setTimeout(() => {
              setLoadBar(true);
            }, 1000);
          }
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section className="contactUs">
        <div className="contact__header">
          <h2>ارتباط با ما</h2>
          <p>شما می توانید نظرات و انتقادات خود را برای ما بفرستید</p>
          <div className="social__icons">
            <a href="https://www.instagram.com/_.hos.m/">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="https://github.com/hosein7379m">
              <i className="uil uil-github-alt"></i>
            </a>
            <a href="#">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
        <div className="contact__body">
          <div className="contact">
            <ul className="contact__personal">
              <li>
                <i className="uil uil-location-point"></i>
                <h6>Iran</h6>
              </li>
              <li>
                <i className="uil uil-mobile-android"></i>
                <h6>989025197379+</h6>
              </li>
              <li>
                <i className="uil uil-envelope"></i>
                <h6>moradih7379@gmail.com</h6>
              </li>
            </ul>
            <div className="contact__location">
              <img src={locationVector} alt="location" />
            </div>
          </div>
          <div className="contact__Comments">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <h3>نظرات شما</h3>
              <label htmlFor="Name">: Name</label>
              <input
                id="Name"
                spellCheck="false"
                autoComplete="off"
                required
                type="text"
                className="email"
                onChange={enterEmail}
                value={emails.name}
                name="name"
              />
              <label htmlFor="Email">: Email</label>
              <input
                id="Email"
                spellCheck="false"
                autoComplete="off"
                required
                type="email"
                className="email"
                onChange={enterEmail}
                value={emails.email}
                name="email"
              />
              <label htmlFor="Comment" id="comment__label">
                : Comment
              </label>
              <textarea
                id="Comment"
                spellCheck="false"
                autoComplete="off"
                required
                className="comment"
                onChange={enterEmail}
                value={emails.message}
                name="message"
              />
              <button
                className={`${loadbar ? null : "disableButton"}`}
                type="submit"
                value="Send"
              >
                {loadbar ? "Send" : <LoadBar />}
              </button>
              <Toaster position="top-left" reverseOrder={false} />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
