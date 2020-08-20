// Libraries
import React from "react";
// Database
import { FOOTER } from "../../database/index";
// Styles
import colors from "../../../styles/theme";

const Footer = () => {
  function renderCopyright(text) {
    return <p>{text}</p>;
  }

  function renderSocial(social) {
    return (
      <div className="social-container">
        {social.map((soc) => (
          <a
            key={soc.alt}
            href={soc.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img src={soc.src} alt={soc.alt} />
          </a>
        ))}
        <style jsx>
          {`
            .social-container {
              display: flex;
              justify-content: space-between;
              width: 90px;
              margin-bottom: 1rem;
            }
            img {
              height: 30px;
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="footer">
      {renderSocial(FOOTER.social)}
      {renderCopyright(FOOTER.text)}
      <style jsx>
        {`
          .footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            bottom: 0;
            height: 20vh;
            background: ${colors.gray.xl};
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
