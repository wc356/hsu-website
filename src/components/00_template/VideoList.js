// Libraries
import React from "react";

const VideoList = ({ videos, columns, rows, width, height, justify }) => {
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
            height: ${height};
            ${justify && "justify-self: center;"}
            width: ${width};
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
            height: 100%;
            width: 100%;

            // CSS Grid
            display: grid;
            grid-template-columns: repeat(${columns}, 1fr);
            grid-template-rows: repeat(${rows}, 1fr);
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
