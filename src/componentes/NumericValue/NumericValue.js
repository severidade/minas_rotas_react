import React from "react";
import styles from './NumericValue.module.css'

export default function Price({ type, value }) {
   const { price } = styles
  return (
    <p className={`${ price } ${type === "highlight" ? styles[type] : "" }`}> 
      {value}
    </p>
  )
}
