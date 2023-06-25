import React, { useRef } from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

const CustomCheckbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ checked, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const clickHandler = () => {
        inputRef.current?.click()
    }

    return (
        <div className={styles.styledCheckbox} onClick={clickHandler}>
            <input {...props} checked={checked} type="checkbox" ref={inputRef} />
            <span className={cn({ [styles.checked]: checked })}></span>
        </div>
    )
}

export default CustomCheckbox