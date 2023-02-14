import React from "react";

import styles from './VideoSection.module.css';
import Content from '../../data/Content';
import VideoSectionBG from "../VideoSectionBg/VideoSectionBg";

export default function VideoSection() {
  const {
    container_VideoSection,
    container__highlight,
    highlight__phrase
  } = styles;

  return (
    <section className={ container_VideoSection }>
      <VideoSectionBG src={ Content.videoSection.videoBg } poster= { Content.videoSection.videoFrame }/>
      <div className= { container__highlight }>
        <p className={ highlight__phrase }> { Content.videoSection.phrase }</p>
      </div>
    </section>
  )
}
