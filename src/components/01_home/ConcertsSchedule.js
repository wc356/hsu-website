// Libraries
import React, { Fragment } from "react";
// Styles
import colors from "../../../styles/theme";

const ConcertsSchedule = () => {
  const renderTitle = (title) => (
    <Fragment>
      <h1>{title}</h1>
      <style jsx>
        {`
          h1 {
            margin-bottom: 3rem;
            font-weight: 400;
            font-size: 2.5rem;
          }
        `}
      </style>
    </Fragment>
  );

  const renderHeader = (header) => (
    <Fragment>
      <li className="header">{header}</li>
      <style jsx>
        {`
          .header {
            font-size: 1.3rem;
            font-weight: 600;
            color: brown;
          }
          li {
            padding: 0.5rem;
            width: 100%;
            text-align: center;
            height: 100%;
          }
        `}
      </style>
    </Fragment>
  );

  const renderConcertDetails = ({
    date,
    location,
    venue,
    repertoire,
    ticket_price,
  }) => (
    <Fragment>
      <li>{date}</li>
      <li>{location}</li>
      <li>{venue}</li>
      <li>{repertoire}</li>
      <li>{ticket_price}</li>
      <style jsx>
        {`
          li {
            padding: 0.5rem;
            width: 100%;
            text-align: center;
            height: 100%;
          }
        `}
      </style>
    </Fragment>
  );

  return (
    <section className="concerts">
      {renderTitle("Upcoming Concerts")}
      <ul className="concerts-grid">
        {renderHeader("Date")}
        {renderHeader("Location")}
        {renderHeader("Venue")}
        {renderHeader("Repertoire & Colleagues")}
        {renderHeader("Tickets")}
        {renderConcertDetails({
          date: "4/20/19",
          location: "Robert Kennedy Hall",
          venue: "International Fellow",
          repertoire: "Act 5 Concerto",
          ticket_price: "FREE",
        })}
      </ul>
      <style jsx>
        {`
          .concerts {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 1rem;
            background: white;
            margin-top: 1rem;
            margin-top: 8rem;
          }
          .concerts-grid {
            display: grid;
            padding: 4rem;
            box-shadow: 5px 5px 20px ${colors.gray.xxd};
            grid-template-columns; 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: auto auto auto;
            column-gap: 3rem;
            row-gap: 2rem;
            grid-template-areas:
              "item-1 item-2 item-3 item-4 item-5"
              "item-1 item-2 item-3 item-4 item-5"
              "item-1 item-2 item-3 item-4 item-5"
          }
        `}
      </style>
    </section>
  );
};

export default ConcertsSchedule;
