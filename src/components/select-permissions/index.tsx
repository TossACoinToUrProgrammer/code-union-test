import React, { useState, useMemo } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'
import PermissionsCheckbox from '../permissions-checkbox'
import { CheckboxItem } from '../../types'

interface SelectPermissionsProps {
    permissions: CheckboxItem[],
    onChange: (changes: CheckboxItem[]) => void
}

const SelectPermissions: React.FC<SelectPermissionsProps> = ({ permissions, onChange }) => {
    const [checkboxIsOpen, setCheckboxIsOpen] = useState(false)

    const checkedPermissions = useMemo<string>(() => {
        return permissions.reduce((acc, curr) => {
            if (curr.value) return acc + curr.name + ', '
            return acc
        }, '')
    }, [permissions])
    
    const toggleCheckboxes = () => setCheckboxIsOpen(prev => !prev)

    return (
        <div className={cn(styles.select, { [styles.opened]: checkboxIsOpen })} onClick={toggleCheckboxes}>
            <input className={styles.input} type="text" disabled value={checkedPermissions || "Выберите права доступа"} />
            {checkboxIsOpen && <PermissionsCheckbox className={styles.checkbox} onChange={onChange} value={permissions} />}
        </div>
    )
}

export default SelectPermissions