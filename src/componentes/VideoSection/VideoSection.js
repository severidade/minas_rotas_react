import React from "react";
import styles from './VideoSection.module.css'

export default function VideoSection() {
  return (
    <section className={ styles.container_VideoSection}>
      <div className= { styles.conteiner__highlight }>
        <p className={ styles.conteiner__highlight__phrase }> Venha se divertir com a gente explorando as trilhas de minas</p>
      </div>
    </section>
  )
}
