import React from "react";
import CarouselItems from "../data/card_content";

const parse = require('html-react-parser');

class Carousel extends React.Component {
  render() {
    const Carrosel = CarouselItems
    return (
      <div>
       <h1>Meu Carrosel</h1>
       <div className="cards">
        {Carrosel?.map((card) => (
          <div key={card.id}>
            <h1> { parse(card.title)}</h1>
            { card.list && (
              <ul>
                { card.list.map( (list_element, index ) => <li key = { index }>{ parse(list_element.item) }</li>) }
              </ul>
            )} <p>{card.text}</p>
            <div className="img_conteiner">
              <img src={`${card.picture}`} alt={`fundo ${card.title} `} />
              <div>{ parse(card.figure_caption) }</div>
            </div>
          </div>
        ))}
       </div>
      </div>
    )
  }
}

export default Carousel;