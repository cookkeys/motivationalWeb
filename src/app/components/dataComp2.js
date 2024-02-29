import React from 'react'
import styles from "./styles/dataComp2.module.css"

export default function DataComp2({imageUrl,content}) {
  return (
    <div>
      <div className={styles.outer_div_1}>
        <img src={imageUrl} className={styles.img1}></img>
        <p className={styles.content1}>{content}</p>
      </div>
    </div>
  )
}
