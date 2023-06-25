import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

const Tag: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <span className={styles.tag}>{children}</span>
    )
}

export default Tag