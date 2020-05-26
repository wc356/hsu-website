import React from "react";

const About = () => (
  <section>
    <h1>ABOUT</h1>
    <p>
      Violist <span>Serena Hsu</span> is currently pursuing a master’s degree at
      <span> The Juilliard School.</span> She has studied at{" "}
      <span>
        The Cleveland Institute of Music, the Paris Conservatoire, and the
        International Musicians Seminar in Prussia Cove, England.
      </span>{" "}
      Her main mentors include Hsin-Yun Huang, Misha Amory, Jean Sulem, Lynne
      Ramsey, and Jeffrey Irvine. She is a prizewinner of various competitions,
      including—
      <span>
        YoungArts, the Ohio Viola Society Competition, Saint Paul String Quartet
        Competition, and the OSTA Chamber Music Competition.
      </span>{" "}
      Additionally, she has competed at the{" "}
      <span>
        Fischoff National Chamber Music Competition, was a finalist at the
        American Viola Society Competition, and semi-finalist of the Cecil
        Aronowitz International Viola Competition in England.
      </span>{" "}
      Serena is an avid chamber musician and dedicated pedagogue.
    </p>

    <style jsx>
      {`
        section {
          padding: 7rem 20rem;
        }

        section h1 {
          color: brown;
          font-weight: 400;
          padding-bottom: 3rem;
          font-size: 3.5rem;
          letter-spacing: 5px;
        }

        section p {
          font-size: 1.3rem;
          line-height: 2.5;
          color: #343434;
        }

        section p span {
          font-size: 1.35rem;
          font-weight: 700;
          color: brown;
        }

        @media screen and (max-width: 1400px) {
          section {
            padding: 7rem;
          }

          section h1 {
            font-size: 2.25rem;
          }

          section p {
            font-size: 1.15rem;
            line-height: 2.25;
          }

          section p span {
            font-size: 1.2rem;
          }
        }

        @media screen and (max-width: 960px) {
          section {
            padding: 3rem;
          }

          section h1 {
            padding-bottom: 1rem;
            font-size: 1.8rem;
          }

          section p {
            font-size: 1rem;
            line-height: 2;
          }

          section p span {
            font-size: 1.05rem;
          }
        }
      `}
    </style>
  </section>
);

export default About;
