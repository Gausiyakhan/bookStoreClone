import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
.container {
      padding:6rem
      margin-top: 3rem;
      text-align: center;
      .contact-form {
          margin-top:6rem;
           background-color: teal;
           padding:4rem;
           border-radius:1rem;

          max-width: 50rem;
          margin: auto;

          .contact-inputs {
            // background-color: grey;
            display: flex;
            flex-direction: column;
            gap: 3rem;

            input[type="submit"] {
              background-color:silver;
              cursor: pointer;
              transition: all 0.2s;
             
            }
          }
        }
      }
    }
  `;

  return (
    
    <Wrapper>
      <Navbar />
      <h2 className="common-heading  font-extrabold  text-center text-4xl">
        Feel Free to Contact us
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.730225309092!2d78.06185379678955!3d27.87955629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5002309cae1%3A0xf3d0d2445bc69f8c!2sJama%20Masjid%20Aligarh!5e0!3m2!1sen!2sin!4v1714396862394!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container mt-10 pt-10">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xvoelzpo"
            method="POST"
            className="contact-inputs"
          >
            <input
              className="input"
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              className="input"
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              className="input"
              name="message"
              cols="60"
              rows="12"
              placeholder="Type Message "
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" className="input" />
          </form>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Contact;
