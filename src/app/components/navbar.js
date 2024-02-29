import React from 'react'
import styles from "./styles/navbar.module.css"
import Link from 'next/link'
import {FaPen} from "react-icons/fa"

export default function Navbar() {
  return (
    <div>
        <div className={styles.outer_div_1}>
      <h1>Logo</h1>
      <ul className={styles.inner_div_1}>
        <li><Link href="./philosophy">Philosophy</Link></li>
        <li><Link href="./motivation">Motivation</Link></li>
        <li><Link href="./timeManagement">Time Management</Link></li>
      </ul>
      <FaPen className={styles.icon_1}/>
    </div>
    </div>
  )
}
