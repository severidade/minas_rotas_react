import React from "react";
import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={ styles.container_CTA}>
      <button className={ styles.btn_CTA }>Faça já sua inscrição</button>
      <p>Pedalar é apenas o início da jornada. Nada se compara à sensação de chegar ao seu destino sem a necessidade de um carro.</p>
    </section>
  )
}
