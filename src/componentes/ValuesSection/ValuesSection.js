import Content from '../../data/Content';
import NumericValue from '../NumericValue/NumericValue';
import styles from './ValuesSection.module.css'

const parse = require('html-react-parser');

export default function Rates() {
  const { rates_container, rates_container__options, option, option__title, option__icon, icon__img } = styles;
  const { text, value, options } = Content.rate;

  return (
    <section className={ rates_container }>
      <h1>Investimento</h1>
      <p>{ text } </p>
      <NumericValue type="highlight" value= { parse(value) }/>
      <h2 className={ rates_container__options } >Serviços Opcionais</h2>
      <ul>
        { options.map((item) =>(
          <li 
            key={item.option}
            className= { option }
          >
            <h3 className={ option__title }>{ item.option }</h3>
            <figure className={ option__icon }>
              <img 
                src={ item.icon } 
                className={ icon__img }
                alt={ `icone ${ item.option.toLowerCase() }`}
              />
            </figure>
            <NumericValue type="" value={ parse(item.value) }/>
          </li>
        ))}
      </ul>
    </section>
  )
}
