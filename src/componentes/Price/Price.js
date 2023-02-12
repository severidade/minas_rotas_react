import Content from '../../data/Content';
import styles from './Price.module.css'

const parse = require('html-react-parser');

export default function Price() {
  return (
    <section className={ styles.section_investment }>
      <h1>Investimento</h1>
      <p>{ Content.price.text } </p>
      <p className={ styles.option__price }>{ parse(Content.price.value) }</p>
      <h2 className={ styles.section_investment__options } >opcionais</h2>
      <ul>
        { Content.price.options.map((item) =>(
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
      <p>{ Content.price.cta_phrase } </p>
    </section>
  )
}
