import React from "react";
import CarouselItems from "../data/card_content";

class Carousel extends React.Component {
  render() {
    const Carrosel = CarouselItems
    return (
      <div>
       <h1>Meu Carrosel</h1>
       <div className="cards">
        {Carrosel.map((card) => (
          <div key={card.id}>
            <h1>{card.title}</h1>
            { card.list && (
              <ul>
                { card.list.map( (number) => <li key = { number.item }>{ number.item }</li>) }
              </ul>
            )} <p>{card.text}</p> 
          </div>
        ))}
       </div>
      </div>
    )
  }
}

export default Carousel;