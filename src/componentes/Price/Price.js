import React from "react";
import styles from './Price.module.css'

export default function Price({ type, value }) {
  return (
    <p
      className={`${ styles.price } ${type === "highlight" ? styles[type] : "" }`}
    > 
      {value}
    </p>
  )
}
