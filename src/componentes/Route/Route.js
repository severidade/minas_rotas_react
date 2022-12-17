import Content from '../../data/Content'

import './Route.css'

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
    </div>
	)
}