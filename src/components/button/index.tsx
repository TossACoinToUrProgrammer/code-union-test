import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
    return (
        <button className={cn(styles.styledButton, className)} {...props} />
    )
}

export default Button