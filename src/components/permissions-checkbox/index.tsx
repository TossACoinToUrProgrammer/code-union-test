import React from 'react'
import ModalWindow from '../modal-window'
import { CheckboxItem } from '../../types'
import styles from './styles.module.scss'
import CustomCheckbox from './CustomCheckbox'
import cn from 'classnames'

interface PermissionsCheckboxProps {
    value: CheckboxItem[]
    onChange: (changes: CheckboxItem[]) => void
    className?: string
}

const PermissionsCheckbox: React.FC<PermissionsCheckboxProps> = ({ onChange, value: state, className }) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        const value = e.target.checked
        let newState = state

        if (name === 'Все' && value) {
            newState = newState.map(item => ({ ...item, value: true }))
        } else {
            newState = newState.map(item => item.name === name ? { ...item, value } : item)
        }

        onChange(newState)
    }

    return (
        <ModalWindow className={cn(styles.wrapper, className)}>
            {state.map(elem =>
                <div key={elem.name} className={styles.field}>
                    <CustomCheckbox name="permission" value={elem.name} onChange={changeHandler} checked={elem.value} />
                    <label>{elem.name}</label>
                </div>)}
        </ModalWindow>
    )
}

export default PermissionsCheckbox