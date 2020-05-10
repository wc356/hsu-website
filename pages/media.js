import React from "react";

import Layout from "../src/components/Layout";
import videos from "../src/database/videos";

export default function media() {
  const FeaturedVideos = () => {
    return (
      <div className="background">
        <div className="card-list">
          <div className="card">
            <h1>Featured Videos</h1>
            <h3>
              <a href="">View All Media</a>
            </h3>
          </div>
          <div className="card" />
        </div>

        <ul className="video-list">
          {videos.map((video) => (
            <li>
              <div className="media">
                <iframe
                  src={video.src}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div className="text">
                <div className="card-title">
                  <h1>{video.title}</h1>
                  <h3>{video.date}</h3>
                </div>
                <p>{video.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <style jsx>
          {`
            .background {
              display: flex;
              flex-direction: column;
              padding: 0 2rem;
            }

            .card-list {
              display: flex;
              justify-content: space-evenly;
            }

            // Align h1 with video-list
            .card-list .card {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 560px;
              padding: 5rem 0;
            }

            .card-list .card h1 {
              font-size: 3rem;
              font-weight: 300;
            }

            .card-list .card h3 {
              margin-top: 1rem;
            }

            .card-list .card a {
              display: inline-block;
              font-weight: 500;
              color: white;
              background: #ffa7b6;
              padding: 1rem;
              border-radius: 0.9rem;
              transition: all 0.15s;
            }

            .card-list .card a:hover {
              background: #ff748c;
              transform: translateY(-5px);
            }

            .video-list {
              display: flex;
              flex-direction: column;
              height: 100%;
              width: 100%;
            }

            .video-list li {
              display: flex;
              justify-content: space-evenly;
              padding: 0;
            }

            .video-list .media,
            .video-list .text {
              display: flex;
              width: 560px;
              flex-direction: column;
              justify-content: center;
              margin-bottom: 5rem;
              line-height: 1.7;
            }

            .card-title {
              margin-bottom: 1rem;
            }

            .text {
              padding: 3rem;
            }

            iframe {
              width: 560px;
              height: 315px;
            }

            @media screen and (max-width: 960px) {
              .card-list .card h1 {
                font-size: 2rem;
              }

              .card-list .card h3 {
                margin-top: 0.5rem;
              }

              .card-list {
                flex-direction: column;
                align-items: center;
              }

              .card-list .card {
                text-align: center;
                padding: 0;
                margin: 2rem 0;
              }

              .video-list li {
                flex-direction: column;
                align-items: center;
                margin-bottom: 5rem;
              }

              .video-list .media,
              .video-list .text {
                margin-bottom: 2rem;
              }

              .text {
                padding: 0;
              }
            }

            @media screen and (max-width: 560px) {
              .card-list {
                align-item: left;
              }

              .video-list li {
                align-items: left;
              }

              iframe {
                max-width: 560px;
                max-height: 315px;
              }
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <Layout>
      <FeaturedVideos />
    </Layout>
  );
}
