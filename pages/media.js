// Libraries
import React, { Fragment } from "react";
// Components
import Layout from "../src/components/00_template/Layout";
import VideoList from "../src/components/03_media/VideoList";
// Database
import { MEDIA_AUDIOS } from "../src/database/index";

const MediaPage = () => {
  function renderMusicPlayer() {
    return (
      <div className="mp3-player__container">
        {MEDIA_AUDIOS.map((mp3) => (
          <Fragment>
            <p>{`${mp3.num}. ${mp3.name}`}</p>
            <audio controls>
              <source src={mp3.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Fragment>
        ))}
        <style jsx>{`
          .mp3-player__container {
            margin-top: 5rem;
            border-radius: 1rem;
            padding: 1rem;

            // Grid
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            grid-template-rows: auto auto auto auto;
            row-gap: 2rem;
          }
          Fragment {
            overflow: hidden;
          }
          p {
            margin-left: 1rem;
            font-weight: 600;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            align-self: center;
          }
          audio {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex-container">
        <h1>Media</h1>
        <VideoList />
        {renderMusicPlayer()}
      </div>
      <style jsx>
        {`
          .flex-container {
            padding: 4rem 2rem;
          }
          h1 {
            text-align: center;
            font-weight: 400;
            font-size: 3rem;
            margin-bottom: 5rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default MediaPage;
