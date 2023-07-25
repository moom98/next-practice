import React from 'react'
import styles from '@/styles/elements/hero.module.css'
import Image from 'next/image'
// import kv from '@/images/cube.jpg'

export default function Hero({ title, subTitle, imageOn = false }) {
  const kv = {
    src: 'https://images.microcms-assets.io/assets/774898bfcddc4454b13029c1a678617e/d881dd005a254dd18f29e3c7ef090ec5/cube.jpg',
    width: 1500,
    height: 1300,
    blurDataURL: 'daa:image/jpeg;base64',
  }

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
