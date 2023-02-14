import React from "react";

import styles from './VideoSectionBg.module.css';

export default function VideoSectionBG({ src, poster }) {
  const { container_VideoSection, VideoBg } = styles;
  return (
    <div className= { container_VideoSection }>
      <video 
        className={ VideoBg }
        poster= {poster}
        autoPlay
        muted
        loop
        playsinline
      >
        <source src={ src } type="video/mp4" />
      </video>
    </div>
  )
}
