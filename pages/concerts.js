import React from "react";

import Layout from "../src/components/Layout";

export default function concerts() {
  return (
    <Layout>
      <div className="flex-container">
        <section className="concerts">
          <h1>CONCERTS PAGE</h1>
          <ul className="concerts-grid">
            <li className="header">Date</li>
            <li className="header">Location</li>
            <li className="header">Venue</li>
            <li className="header">Repertoire & Colleagues</li>
            <li className="header">Tickets</li>
            <li>TBA</li>
            <li>The Juilliard School</li>
            <li>TBA</li>
            <li>Solo Repertoire TBA</li>
            <li>FREE</li>
            <li>TBA</li>
            <li>The Juilliard School</li>
            <li>Morse Hall</li>
            <li>String Quartet Repertoire TBA</li>
            <li>FREE</li>
          </ul>
        </section>
      </div>

      <style jsx>
        {`
          .flex-container {
            display: flex;
            justify-content: center;
          }

          .concerts {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 1rem;
          }

          .concerts h1 {
            padding: 1rem;
          }

          .concerts-grid {
            display: grid;
            padding: 1rem;
            border-radius: 10px;
            background: white;
            grid-template-columns; 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: auto auto auto;
            column-gap: 1rem;
            row-gap: 2rem;
            grid-template-areas:
              "item-1 item-2 item-3 item-4 item-5"
              "item-1 item-2 item-3 item-4 item-5"
              "item-1 item-2 item-3 item-4 item-5"
          }

          .concerts-grid li {
            padding: .5rem;
            width: 100%;
            text-align: center;
            height: 100%;
          }

          .concerts-grid .header {
            border-bottom: 1px solid black;
            font-weight: 600;
          }
        `}
      </style>
    </Layout>
  );
}
