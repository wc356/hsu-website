import React from "react";

import Layout from "../src/components/Layout";

export default function media() {
  const FeaturedVideos = () => {
    const videosList = [
      {
        title: "Hans Sitt Album Leaves",
        date: "April 20, 2019",
        description: "Serena Hsu performs the Hans Sitt’s Album Leaves Op. 39.",
        src: "https://www.youtube.com/embed/5dDrgaH6xvA",
      },
      {
        title: "Wild Purple",
        date: "April 20, 2019",
        description:
          "Serena Hsu performs Joan Tower’s solo viola work, Wild Purple (1998) in Mixon Hall at the Cleveland Institute of Music. Wild Purple was written for the violist Paul Neubauer. The piece symbolizes the viola’s sound with the color purple and expresses a wild energy.",
        src: "https://www.youtube.com/embed/RLImgYI7ByM",
      },
      {
        title: "Bruch Double Concerto",
        date: "April 20, 2019",
        description:
          "Live performance of Max Bruch’s Op. 88 Concerto (1911) for Clarinet, Viola, and Orchestra in E minor (transcribed for violin, viola, and piano) alongside colleagues Rebecca Benjamin (violin) and Natsumi Shibagaki (piano)..",
        src: "https://www.youtube.com/embed/bG_RucFfvhg",
      },
    ];

    return videosList.map((video) => (
      <ul>
        <section className="media">
          <iframe
            width="560"
            height="315"
            src={video.src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </section>
        <section className="text">
          <h3>{video.title}</h3>
          <h3>{video.date}</h3>
          <p>{video.description}</p>
        </section>

        <style jsx>
          {`
            ul {
              display: flex;
              justify-content: space-evenly;
              padding: 0;
            }

            section {
              display: flex;
              width: 560px;
              flex-direction: column;
              justify-content: center;
            }
          `}
        </style>
      </ul>
    ));
  };

  return (
    <Layout>
      <div className="flex-container">
        <div>
          <h1>Featured Videos</h1>
          <h3>View All Media</h3>
        </div>
        <FeaturedVideos />
      </div>

      <style jsx>
        {`
          .flex-container {
            display: flex;
            flex-direction: column;
            background: pink;
          }
        `}
      </style>
    </Layout>
  );
}
