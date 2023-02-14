import React from "react";

import styles from './VideoSection.module.css';
import Content from '../../data/Content';
import VideoSectionBG from "../VideoSectionBg/VideoSectionBg";

export default function VideoSection() {
  return (
    <section className={ styles.container_VideoSection}>
      <VideoSectionBG src={ Content.videoSection.videoBg } poster= { Content.videoSection.videoFrame }/>
      <div className= { styles.conteiner__highlight }>
        <p className={ styles.conteiner__highlight__phrase }> { Content.videoSection.phrase }</p>
      </div>
    </section>
  )
}
