import Content from '../../data/Content';

import './Route.css'
import ShareButton from '../ShareButton/ShareButton';

const parse = require('html-react-parser');

export default function Route() {
  return (

    <div className='container_route'>
      <div className='container_route_text'>
        <h2>{parse(Content.route.title)}</h2>
        <p>{parse(Content.route.text)}</p>
      </div>
      <div className='container_map'>
        {parse(Content.route.map)}
      </div>
      <div
        className='container_share'
      >
        <h3>Compartilhe</h3>
        <ShareButton shareType={"whatsapp"} link={Content.route.share} />
        <ShareButton shareType={"email"} link={Content.route.share} />
        <ShareButton shareType={"wikiloc"} link={Content.route.share} />
      </div>
    </div>
	)
}