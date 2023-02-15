import styles from './VideoSection.module.css';
import Content from '../../data/Content';
import VideoBG from "../VideoBG/VideoBG";

export default function VideoSection() {
  const {
    container_VideoSection,
    container__highlight,
    highlight__phrase
  } = styles;

  const {
    videoBg,
    videoFrame,
    phrase
  } = Content.videoSection;

  return (
    <section className={ container_VideoSection }>
      <VideoBG src={ videoBg } poster= { videoFrame }/>
      <div className= { container__highlight }>
        <p className={ highlight__phrase }> { phrase }</p>
      </div>
    </section>
  )
}