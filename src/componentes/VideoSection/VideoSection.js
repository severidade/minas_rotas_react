import React from "react";

import styles from './VideoSection.module.css';
import Content from '../../data/Content';

export default function VideoSection() {
  return (
    <section className={ styles.container_VideoSection}>
      <video 
        className={ styles.container_VideoSection__VideoBg}
        poster= { Content.videoSection.videoFrame  }
        autoPlay
        muted
        loop
        playsinline
      >
        <source src={ Content.videoSection.videoBg } type="video/mp4" />
      </video>
      <div className= { styles.conteiner__highlight }>
        <p className={ styles.conteiner__highlight__phrase }> { Content.videoSection.phrase }</p>
      </div>
    </section>
  )
}
