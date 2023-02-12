import Content from '../../data/Content';
import Price from '../Price/Price';
import styles from './Rates.module.css'

const parse = require('html-react-parser');

export default function Rates() {
  return (
    <section className={ styles.rates_container }>
      <h1>Investimento</h1>
      <p>{ Content.rate.text } </p>
      <Price type="highlight" value= { parse(Content.rate.value) }/>
      <h2 className={ styles.rates_container__options } >Opções</h2>
      <ul>
        { Content.rate.options.map((item) =>(
          <li 
            key={item.option}
            className= { styles.option }
          >
            <h3 className={ styles.option__title }>{ item.option }</h3>
            <figure className={ styles.option__icon }>
              <img 
                src={ item.icon } 
                className={ styles.icon__img }
                alt={ `icone ${ item.option.toLowerCase() }`}
              />
            </figure>
            <Price type="" value={ parse(item.value) }/>
          </li>
        ))}
      </ul>
    </section>
  )
}
