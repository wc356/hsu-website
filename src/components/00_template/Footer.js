import React from "react";

import colors from "../../../styles/theme";

const Footer = () => (
  <div className="footer">
    <style jsx>
      {`
        .footer {
          bottom: 0;
          height: 20vh;
          background: ${colors.gray.xl};
        }
      `}
    </style>
  </div>
);

export default Footer;
