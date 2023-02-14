import React from "react";

import styles from './VideoSectionBg.module.css';

export default function VideoSectionBG({ src, poster }) {
  return (
    <div className= {styles.container_VideoSection}>
      <video 
        className={ styles.VideoBg }
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
