// Libraries
import React, { Fragment } from "react";
// Database
import { MEDIA_FEATURED_VIDEOS as videos } from "../../database/index";
// Styles
import colors from "../../../styles/theme";

const VideoList = () => {
  const renderVideo = (src, title) => (
    <li key={title}>
      <h1>{title}</h1>
      <iframe
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <style jsx>
        {`
          li {
            overflow: hidden;
          }
          h1 {
            font-size: 1.2rem;
            font-weight: 400;
            margin-bottom: 1rem;

            // Ellipsis for overflowing text
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          iframe {
            width: 100%;
            height: 100%;
          }
          @media screen and (max-width: 960px) {
          }
          @media screen and (max-width: 560px) {
          }
        `}
      </style>
    </li>
  );

  return (
    <ul className="video-grid__container">
      {videos.map((video) => renderVideo(video.src, video.title))}
      <style jsx>
        {`
          .video-grid__container {
            display: grid;
            height: 50rem;
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            column-gap: 2rem;
            row-gap: 5rem;
          }
          @media screen and (max-width: 960px) {
          }
          @media screen and (max-width: 560px) {
          }
        `}
      </style>
    </ul>
  );
};

export default VideoList;
