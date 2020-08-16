import React, { Fragment } from "react";
import Layout from "../src/components/00_template/Layout";
import VideoList from "../src/components/00_template/VideoList";
import { MEDIA_PAGE } from "../src/database/index";

const MediaPage = () => {
  const title = MEDIA_PAGE.title;
  const videos = MEDIA_PAGE.videos;
  const audios = MEDIA_PAGE.audios;

  function renderTitle(title) {
    return (
      <Fragment>
        <h1>{title}</h1>
        <style jsx>
          {`
            h1 {
              text-align: center;
              font-weight: 400;
              font-size: 3rem;
              margin-bottom: 5rem;
            }
          `}
        </style>
      </Fragment>
    );
  }

  function renderMusicPlayer(audios) {
    const renderAudioTitle = (mp3) => (
      <Fragment>
        <p>{`${mp3.num}. ${mp3.name}`}</p>
        <style jsx>
          {`
            p {
              margin-left: 1rem;
              font-weight: 600;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              align-self: center;
            }
          `}
        </style>
      </Fragment>
    );

    const renderAudioCtrl = (mp3) => (
      <Fragment>
        <audio controls>
          <source src={mp3.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <style jsx>
          {`
            audio {
              width: 100%;
            }
          `}
        </style>
      </Fragment>
    );

    return (
      <div className="mp3-player__container">
        {audios.map((mp3, i) => (
          <Fragment key={i}>
            {renderAudioTitle(mp3)}
            {renderAudioCtrl(mp3)}
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
        `}</style>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex-container">
        {renderTitle(title)}
        <VideoList videos={videos} columns="3" rows="2" height="20rem" />
        {renderMusicPlayer(audios)}
      </div>
      <style jsx>
        {`
          .flex-container {
            padding: 4rem 2rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default MediaPage;
