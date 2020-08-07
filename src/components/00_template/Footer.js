// Libraries
import React from "react";
// Database
import { SOCIAL_MEDIA } from "../../database/index";
// Styles
import colors from "../../../styles/theme";

const Footer = () => {
  const renderSocial = () => (
    <div className="social-container">
      {SOCIAL_MEDIA.map((socMedia) => (
        <a
          href={socMedia.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src={socMedia.src} alt={socMedia.alt} />
        </a>
      ))}
      <style jsx>
        {`
          .social-container {
            display: flex;
            width: 5.7rem;
            align-items: center;
            justify-content: space-between;
          }
          img {
            height: 30px;
          }
        `}
      </style>
    </div>
  );

  // <a href={src} target="_blank" rel="nofollow noopener noreferrer">
  return (
    <div className="footer">
      {renderSocial()}
      <style jsx>
        {`
          .footer {
            display: flex;
            justify-content: center;
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
