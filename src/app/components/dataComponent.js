import React from 'react'
import styles from "./styles/dataComponenet.module.css"

export default function DataComponent({imageUrl, title, content}) {
  return (
    <div>
      <div className={styles.outer_div_1}>
        <img src={imageUrl} className={styles.img1}></img>
        <p className={styles.name1}>{title}</p>
        <p className={styles.content1}>{content}</p>
      </div>
    </div>
  )
}
