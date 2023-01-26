import Content from '../../data/Content';
import {useState} from 'react';

import './Route.css'

const parse = require('html-react-parser');

export default function Route() {

  function shareRoute() {
    window.open("https://pt.wikiloc.com/trilhas-mountain-bike/serra-do-cachimbo-pelo-barreiro-68903740#", "Share on Wikiloc", "height=600,width=600");
  }

  function shareRouteWhatsapp() {
    const shareLink = "https://pt.wikiloc.com/trilhas-mountain-bike/serra-do-cachimbo-pelo-barreiro-68903740#";
    window.open(`whatsapp://send?text=${shareLink}`, "_blank");
  }

  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  
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
        <div>
          <button onClick={() => setClicked(true)}>
            Share route
          </button>
          {clicked && shareRoute()}
        </div>
        <div>
          <button onClick={() => setClicked2(true)}>
            Share route on WhatsApp
          </button>
          {clicked2 && shareRouteWhatsapp()}
        </div>
      </div>
    </div>
	)
}