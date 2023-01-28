import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact-me.css";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const ContactMe = () => {
  const form = useRef();
  const [isEmailSemded, setIsEmailSended] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9kh2mum",
        "template_8qszs4e",
        form.current,
        "1tIRyBwh3tYwuwE-k"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSended("seccess");
        },
        (error) => {
          console.log(error.text);
          setIsEmailSended("error");
        }
      );

    e.target.reset();
  };
  return (
    <>
      <Navbar />
      <section className="contact_me">
        <div className="container">
          <div className="section_title">
            <h1 className="section_title_header">به من پیام بدید</h1>
            <h3 className="section_title_subheader">
              اگر دنبال یه برنامه نویس خوب میگردی به من پیام بده
            </h3>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form_group">
              <label className="contact_form_group_label">اسمتون:</label>
              <input
                className="contact_form_group_input"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="contact_form_group">
              <label className="contact_form_group_label">ایمیلتون:</label>
              <input
                className="contact_form_group_input"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="contact_form_group">
              <label className="contact_form_group_label">پیامتون:</label>
              <textarea
                className="contact_form_group_textarea"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="form_btn">
              ارسال پیام
            </button>
          </form>
        </div>
      </section>
      {isEmailSemded === "" ? (
        ""
      ) : (
        <div className="popup">
          <button className="popup_btn" onClick={() => setIsEmailSended("")}>
            X
          </button>
          {isEmailSemded === "seccess" ? (
            <p className="popup_text">
              پیام شما با موفقیت ارسال شد،
              <br /> در اسرع وقت به شما پیام میدهم.
            </p>
          ) : (
            <p className="popup_text">
              ارسال پیام با مشکل مواجه شده،
              <br /> لطفا دوباره امتحان کنید.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ContactMe;
