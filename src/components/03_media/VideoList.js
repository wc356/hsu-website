import React from "react";

import { MEDIA_FEATURED_VIDEOS as videos } from "../../database/index";
import colors from "../../../styles/theme";

const VideoList = () => {
  const renderVideo = (src) => (
    <div className="media">
      <iframe
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <style jsx>
        {`
          .media {
            display: flex;
            width: 560px;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 5rem;
            line-height: 1.7;
          }
          iframe {
            width: 560px;
            height: 315px;
          }
          @media screen and (max-width: 960px) {
            .media {
              margin-bottom: 2rem;
            }
          }
          @media screen and (max-width: 560px) {
            iframe {
              max-width: 560px;
              max-height: 315px;
            }
          }
        `}
      </style>
    </div>
  );

  const renderVideoDescription = (video) => (
    <div className="text">
      <div className="card-title">
        <h1>{video.title}</h1>
        <h3>{video.date}</h3>
      </div>
      <p>{video.description}</p>
      <style jsx>
        {`
          .text {
            display: flex;
            width: 560px;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 5rem;
            line-height: 1.7;
            padding: 3rem;
          }
          .text .card-title {
            color: ${colors.black.l};
            margin-bottom: 1rem;
          }
          @media screen and (max-width: 960px) {
            .text {
              margin-bottom: 2rem;
              padding: 0;
            }
          }
        `}
      </style>
    </div>
  );

  return (
    <ul className="video-list">
      {videos.map((video) => (
        <li key={video.title}>
          {renderVideo(video.src)}
          {renderVideoDescription(video)}
        </li>
      ))}
      <style jsx>
        {`
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
          @media screen and (max-width: 960px) {
            .video-list li {
              flex-direction: column;
              align-items: center;
              margin-bottom: 5rem;
            }
          }
          @media screen and (max-width: 560px) {
            .video-list li {
              align-items: left;
            }
          }
        `}
      </style>
    </ul>
  );
};

export default VideoList;
