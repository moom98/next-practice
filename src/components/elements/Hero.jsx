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
          <Image
            src={kv}
            alt=""
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
