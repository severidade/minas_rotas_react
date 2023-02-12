import Content from '../../data/Content';
import styles from './Price.module.css'

const parse = require('html-react-parser');

export default function Price() {
  return (
    <section className={ styles.rates_container }>
      <h1>Investimento</h1>
      <p>{ Content.rate.text } </p>
      <p className={ styles.option__price }>{ parse(Content.rate.value) }</p>
      <h2 className={ styles.rates_container__options } >serviços opcionais</h2>
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
            <p 
              className={ styles.option__price }
            > {parse(item.value)} </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
