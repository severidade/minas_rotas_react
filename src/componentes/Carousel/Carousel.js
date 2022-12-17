import { Slider, Slide } from '../Slider/Index'
import Content from '../../data/Content'

import './Carousel.css'

const parse = require('html-react-parser');

export default function Carousel() {
  const settings = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
	effect: "fade",
  }

	return (
		<Slider settings={settings}>
			{Content.CarouselItems?.map((item) => (
				<Slide key={item.id}>
					<div className="container_image">
						<img src={`${item.picture}`} alt={`fundo ${item.title} `} />
						<div className='figure_caption'>{parse(item.figure_caption)}</div>
					</div>
					<div className="container_text">
						<h2>{parse(item.title)}</h2>
						<p className="posicao_item">{item.id}</p>
						{item.list && (
							<ul>
								{item.list.map((list_element, index) => <li key={index}>{parse(list_element.item)}</li>)}
							</ul>
						)} <p>{item.text}</p>
					</div>
				</Slide>
			))}
		</Slider>
	)
}