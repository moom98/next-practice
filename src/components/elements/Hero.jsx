import React from 'react'
import styles from '@/styles/elements/hero.module.css'

export default function Hero({ title, subTitle, imageOn = false}) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
        {imageOn && <figure>[画像]</figure>}
    </div>
  )
}
