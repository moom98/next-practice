import React from 'react'
import ConvertDate from 'components/features/convert-date'
import styles from '@/styles/elements/PostHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PostHeader({ title, subTitle, publish = '' }) {
  return (
    <div className={styles.stack}>
      <p className={styles.subTitle}>{subTitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={'faClock'} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
