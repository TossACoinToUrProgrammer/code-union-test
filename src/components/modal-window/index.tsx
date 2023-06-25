import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

interface ModalWindowProps {
    className?: string
}

const ModalWindow: React.FC<ModalWindowProps & PropsWithChildren> = ({ children, className }) => {
    return (
        <div className={cn(styles.modal, className)}>{children}</div>
    )
}

export default ModalWindow