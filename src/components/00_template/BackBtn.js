import React, { Fragment } from "react";
import Link from "next/link";

import colors from "../../../styles/theme";

const BackBtn = ({ href }) => (
  <Fragment>
    <Link href={href}>
      <a>
        <i id="icon-arrow" />
        BACK
      </a>
    </Link>
    <style jsx>{`
      a {
        background: ${colors.gray.l};
        letter-spacing: 1px;
        padding: 0.75rem;
        font-size: 0.9rem;
        font-family: Montserrat;
        font-weight: 500;
        transition: all 0.15s;
        white-space: nowrap;
      }
      a:hover {
        background: lightgray;
      }
      #icon-arrow {
        display: inline-block;
        content: "";
        width: 10px;
        height: 10px;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        transform: rotate(135deg);
        margin-right: 5px;
      }
    `}</style>
  </Fragment>
);

export default BackBtn;
