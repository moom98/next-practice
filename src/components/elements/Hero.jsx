import React from 'react'
import styles from '@/styles/elements/hero.module.css'
import Image from 'next/image'
import kv from '@/images/cube.jpg'

export default function Hero({ title, subTitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image src={kv} alt="" sizes="100vw" priority />
        </figure>
      )}
    </div>
  )
}
