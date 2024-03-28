import Content from '../../data/Content';
import styles from './Hero.module.css'

const parse = require('html-react-parser');

export default function Hero() {
  const {
    hero,
    container_logo,
    logo,
    container_main_image,
    data_rote,
    heder_data_rote,
    type_of_route,
    level,
    icon_type_of_route,
    contanier_data_rote,
    details,
    group,
    container_participants,
    participant,
    avatar
  } = styles
  return (
    <section className={ hero }>
      <div className={ container_logo }>
        <h1 className={ logo }> Pedalando em Minas </h1>
      </div>

      <figure className={ container_main_image }>
        <img
          src={ Content.hero.route_img.img } 
          alt={ Content.hero.route_img.alt }
        />
        {/* <figcaption><strong>Cidades</strong> Corinto/Diamantina</figcaption> */}
      </figure>

      <div className={ data_rote }>
        <div class={ heder_data_rote }>
          <h2 class={ type_of_route }>
            { Content.hero.heder_data_route.typeof}
          </h2>
          <p className={ level }> 
            { Content.hero.heder_data_route.level }
          </p>
          <figure className={ icon_type_of_route }>
            <img
              src={ Content.hero.heder_data_route.type_of_route_icon } 
              alt="Ícone para ciclismo de estrada"
            />
          </figure>
        </div>
        <ul className= { contanier_data_rote }>
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

      <div className={ details } >
        <h2> { Content.hero.route_title } </h2>
        <h3> sobre o passeio </h3>
        <p> {parse(Content.hero.about)} </p>
      </div>

      <div className={ group }>
        <h3>Participantes confirmados</h3>
        <div className={ container_participants }>
          {Content.hero.participants?.map((item) =>(
            <div key={item.name} className={ participant }>
              <figure 
              className= { avatar }
              >
                <img src={ item.avatar } alt={ item.name }/>
              </figure>
              <p className={ styles.participant_name }> {item.name} </p>
            </div>
          ))}
          <button className={ styles.participate } type="button">Quero Participar</button>
        </div>
        <p>Grupo de no máximo <strong>15 ciclistas</strong></p>
      </div>
      
    </section>
	)
}