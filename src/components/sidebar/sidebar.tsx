import React from 'react'
import { Logo } from '../logo'
import styles from './sidebar.module.css'

export const Sidebar = () => {
  return (
    <div>
      <header className={styles.Header}>
        <a href="https://design.wonderflow.ai">
          <Logo className={styles.Logo} />
        </a>
      </header>
    </div>
  )
}
