import React from "react";

const AboutBio = () => (
  <section className="text">
    <article>
      Violist <span>Serena Hsu</span> is currently pursuing a master’s degree at
      The Juilliard School. She has studied at The Cleveland Institute of Music,
      the Paris Conservatoire, and the International Musicians Seminar in
      Prussia Cove, England. Her main mentors include Hsin-Yun Huang, Misha
      Amory, Jean Sulem, Lynne Ramsey, and Jeffrey Irvine. She is a prizewinner
      of various competitions, including YoungArts, the Ohio Viola Society
      Competition, Saint Paul String Quartet Competition, and the OSTA Chamber
      Music Competition. Additionally, she has competed at the Fischoff National
      Chamber Music Competition, was a finalist at the American Viola Society
      Competition, and semi-finalist of the Cecil Aronowitz International Viola
      Competition in England.
    </article>
    <article>
      She has performed at venues both in the United States and abroad,
      including Severance Hall, the Kennedy Center, Wiener Konzerthaus, Château
      de Fontainebleau, Alice Tully Hall, Southern Theatre, among others. She
      has appeared on Cleveland’s WRUW, North Carolina’s WDAV, and NPR’s “From
      the Top.” She has performed in master classes for Roberto Díaz, Barbara
      Westphal, Bruno Pasquier, François Salque, Quatuor Ébène, Lars Anders
      Tomter, among others.
    </article>
    <article>
      An avid chamber musician, Serena has participated in the Intensive Quartet
      Seminar at CIM, and has attended the McGill International String Quartet
      Academy, studying with the Alban Berg and Borodin Quartet. As a member of
      The Belka Quartet, she served as the CIM Apprentice Quartet, holding a
      Young Artist Residency with the Cleveland Chamber Music Society for the
      2017-18 season. Serena has also served as Principal Violist of the CIM
      Orchestra and was featured on a Chamber Music Series Faculty Concert. As
      an avid chamber musician, she has attended various fellowship and
      intensive programs, including Kneisel Hall Chamber Music, Fontainebleau
      School, the Summer Music Institute Young Artists Program, Music@Menlo
      Chamber Music Institute, Heifetz International Music Institute, and
      Bowdoin International Music Festival. Besides performing, Serena loves to
      read and cook.
    </article>

    <style jsx>
      {`
        .text {
          max-width: 50vw;
          line-height: 2rem;
          padding: 1.2rem 5rem;
          height: 100%;
        }

        .text article {
          padding: 1.2rem 0;
        }

        .text article span {
          font-weight: 700;
        }

        @media screen and (max-width: 1400px) {
          .text {
            order: 2;
            height: 100%;
            max-width: 100vw;
          }
        }

        @media screen and (max-width: 500px) {
          .text {
            padding: 1rem 3rem;
          }
        }
      `}
    </style>
  </section>
);

export default AboutBio;
