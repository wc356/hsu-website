import React from "react";

const ConcertsSchedule = () => {
  const renderHeader = (header) => (
    <React.Fragment>
      <li className="header">{header}</li>
      <style jsx>
        {`
          .header {
            border-bottom: 1px solid black;
            font-weight: 600;
          }
          li {
            padding: 0.5rem;
            width: 100%;
            text-align: center;
            height: 100%;
          }
        `}
      </style>
    </React.Fragment>
  );

  const renderConcertDetails = ({
    date,
    location,
    venue,
    repertoire,
    ticket_price,
  }) => (
    <React.Fragment>
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
    </React.Fragment>
  );

  return (
    <section className="concerts">
      <h1>CONCERTS PAGE</h1>
      <ul className="concerts-grid">
        {renderHeader("Date")}
        {renderHeader("Location")}
        {renderHeader("Venue")}
        {renderHeader("Repertoire & Colleagues")}
        {renderHeader("Tickets")}
        {renderConcertDetails({
          date: "-",
          location: "-",
          venue: "-",
          repertoire: "-",
          ticket_price: "-",
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
          }
          .concerts h1 {
            font-weight: 500;
            letter-spacing: 3px;
            padding: 1rem;
          }
          .concerts-grid {
            display: grid;
            padding: 2rem;
            box-shadow: 3px 3px #000;
            grid-template-columns; 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: auto auto auto;
            column-gap: 1rem;
            border: 1px gray solid;
            border-radius: 10px;
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
