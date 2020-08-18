import React from "react";
import ContactBtn from "../00_template/ContactBtn";
import { HOME_CONTACT } from "../../database/index";

import colors from "../../../styles/theme";

const ContactMe = () => {
  const title = HOME_CONTACT.title;
  const contactBtn = HOME_CONTACT.contact_btn;
  const email = contactBtn.email;
  const text = contactBtn.text;

  function renderTitle(title) {
    return (
      <h1>
        {title}
        <style jsx>
          {`
            h1 {
              color: ${colors.black.l};
              font-family: Montserrat;
              font-weight: 500;
              margin-bottom: 2rem;
            }
            @media only screen and (max-width: 350px) {
              h1 {
                text-align: center;
                // font-size: 1.35rem;
                font-size: 7vw;
              }
            }
          `}
        </style>
      </h1>
    );
  }

  return (
    <section className="contact-me__container">
      {renderTitle(title)}
      <ContactBtn email={email} text={text} />
      <style jsx>
        {`
          .contact-me__container {
            padding: 3rem;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </section>
  );
};

export default ContactMe;
