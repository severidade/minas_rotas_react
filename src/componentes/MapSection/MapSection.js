import Content from '../../data/Content';
import styles from './MapSection.module.css';
import ShareButton from '../ShareButton/ShareButton';

const parse = require('html-react-parser');

export default function Route() {
  const {
    container_route,
    content_route,
    container_route_text,
    container_map,
    container_share,
  } = styles;

  const {
    title,
    text,
    map,
    share
  } = Content.route;

  return (
    <section className={ container_route }>
      <div className={ container_route_text }>
        <h2>{parse(title)}</h2>
        <p>{parse(text)}</p>
      </div>
      <div className={ content_route }>
        <div className={container_map}>
          {parse(map)}
        </div>
        <div className={container_share}>
          <h3>Compartilhe</h3>
          <ShareButton shareType={"whatsapp"} link={share} />
          <ShareButton shareType={"email"} link={share} />
          <ShareButton shareType={"wikiloc"} link={share} />
        </div>
      </div>
    </section>
	)
}