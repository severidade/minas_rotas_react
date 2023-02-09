import Content from '../../data/Content';

// import './Route.css'
// import ShareButton from '../ShareButton/ShareButton';

import styles from './Hero.module.css'

const parse = require('html-react-parser');

export default function Hero() {
  return (
    <section className={ styles.hero }>
      <div className={ styles.container_logo }>
        <h1 className={ styles.logo }> Pedalando em Minas </h1>
      </div>

      <figure className={styles.container_main_image }>
        <img
          src={ Content.hero.route_img.img } 
          alt={ Content.hero.route_img.alt }
        />
        <figcaption><strong>Cidades</strong> Corinto/Diamantina</figcaption>
      </figure>

      <div className={ styles.data_rote }>
        <div class={ styles.heder_data_rote }>
          <h2 class={ styles.type_of_route }>
            { Content.hero.heder_data_route.type_of_route }
          </h2>
          <p className={ styles.level }> 
            { Content.hero.heder_data_route.level }
          </p>
          <figure className={ styles.icon_type_of_route }>
            <img
              src={ Content.hero.heder_data_route.type_of_route_icon } 
              alt="Ícone para ciclismo de estrada"
            />
          </figure>
        </div>
        <ul className= { styles.contanier_data_rote }>
          {Content.hero.route_data?.map((item) =>(
            <li 
              key={item.tooltip}
              tooltip-text={item.tooltip}
              className= {`${ styles.data } ${ styles.tooltip }`}
            >
              { item.data }
            </li>
          ))}
        </ul>
      </div>

      <div className={ styles.details } >
        <h2> { Content.hero.route_title } </h2>
        <h3> sobre o passeio </h3>
        <p> {parse(Content.hero.about)} </p>
      </div>

      <div className={ styles.group }>
        <h3>Participantes confirmados</h3>
        <div className={ styles.container_participants }>
          {Content.hero.participants?.map((item) =>(
            <div 
              key={item.name} 
              tooltip-text={item.name}
              // className={ styles.tooltip }
            >
              <figure className= { styles.avatar }>
                <img src={ item.avatar } alt={ item.name }/>
              </figure>
            </div>
          ))}
          <button className={ styles.participate } type="button">Quero Participar</button>
        </div>
        <p>Grupo de no máximo <strong>15 ciclistas</strong></p>
      </div>
      
    </section>
	)
}