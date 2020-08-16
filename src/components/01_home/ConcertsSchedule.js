import React, { Fragment } from "react";
import colors from "../../../styles/theme";

const ConcertsSchedule = () => {
  function renderSchedTitle(title) {
    return (
      <Fragment>
        <h1>{title}</h1>
        <style jsx>
          {`
            h1 {
              margin-bottom: 3rem;
              font-weight: 400;
              font-size: 2.5rem;
              text-align: center;
            }
          `}
        </style>
      </Fragment>
    );
  }

  function renderSchedHeaders({ head1, head2, head3, head4, head5 }) {
    return (
      <Fragment>
        <li>{head1}</li>
        <li>{head2}</li>
        <li>{head3}</li>
        <li>{head4}</li>
        <li>{head5}</li>
        <style jsx>
          {`
            li {
              font-size: 1.3rem;
              font-weight: 600;
              color: ${colors.pink.d};
              padding: 0.5rem;
              width: 100%;
              text-align: center;
              height: 100%;
            }
          `}
        </style>
      </Fragment>
    );
  }

  function renderConcertDetails({
    date,
    location,
    venue,
    repertoire,
    ticket_price,
  }) {
    return (
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
  }

  return (
    <section className="concerts">
      {renderSchedTitle("Upcoming Concerts")}
      <ul className="concerts-grid">
        {renderSchedHeaders({
          head1: "Date",
          head2: "Location",
          head3: "Venue",
          head4: "Repertoire & Colleagues",
          head5: "Tickets",
        })}
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
          @media only screen and (max-width: 280px) {
            .concerts {
              transform: scale(.55);
            }
            .concerts-grid {
              padding: .5rem;
              column-gap: 0;
              row-gap: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ConcertsSchedule;
