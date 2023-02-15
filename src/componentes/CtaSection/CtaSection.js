import styles from './CtaSection.module.css'

export default function CtaSection() {
  const {
    container_CTA,
    btn_CTA
  } = styles;

  return (
    <section className={ container_CTA }>
      <button className={ btn_CTA }>Faça já sua inscrição</button>
      <p>Pedalar é apenas o início da jornada. Nada se compara à sensação de chegar ao seu destino sem a necessidade de um carro.</p>
    </section>
  )
}
