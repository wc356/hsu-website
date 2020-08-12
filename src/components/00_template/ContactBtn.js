// Libraries
import React from "react";

const ContactBtn = ({ email, text }) => (
  <a
    href={`mailto:${email}`}
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    {text}
    <style jsx>
      {`
        a {
          display: flex;
          justify-content: center;
          background: pink;
          padding: 1rem;
          font-family: Montserrat;
          color: #000;
          font-weight: 500;
          letter-spacing: 1px;
          border-radius: 1.5rem;
          transition: all 0.15s;
        }
        a:hover {
          background: aquamarine;
        }
      `}
    </style>
  </a>
);

export default ContactBtn;
