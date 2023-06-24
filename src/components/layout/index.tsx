import React, { PropsWithChildren } from 'react'
import Navbar from '../navbar'
import styles from './styles.module.scss'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
