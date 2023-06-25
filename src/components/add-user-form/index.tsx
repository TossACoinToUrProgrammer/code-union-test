import React, { useState, useRef } from 'react'
import ModalWindow from '../modal-window'
import styles from './styles.module.scss'
import Button from '../button'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import PermissionsCheckbox from '../permissions-checkbox'
import cn from 'classnames'

interface AddUserFormProps {
    submit: (data: any) => void
    close: () => void
}

const AddUserForm: React.FC<AddUserFormProps> = ({ submit, close }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [permissions, setPermissions] = useState([
        { name: "Все", value: false },
        { name: "Модерация объявлений", value: false },
        { name: "Блог", value: false },
        { name: "Тех. поддержка", value: false },
        { name: "Обращения клиентов", value: false },
        { name: "Аналитика", value: false },
        { name: "Акции", value: false },
    ])
    const [checkboxIsOpen, setCheckboxIsOpen] = useState(false)

    const toggleCheckboxes = () => setCheckboxIsOpen(prev => !prev)

    const onSubmit = (e: any) => {
        e.preventDefault()
        submit({ email: inputRef.current?.value, permissions: permissions.map(item => item.name) })
    }

    return (
        <div className={styles.wrapper}>
            <ModalWindow className={styles.modal}>
                <button onClick={close} className={styles.closeButton}><CloseIcon /></button>
                <span className={styles.title}>Отправить приглашение</span>
                <form className={styles.form} onSubmit={onSubmit}>
                    <input required className={styles.input} ref={inputRef} type="email" placeholder='Email' />
                    <div className={cn(styles.select, { [styles.opened]: checkboxIsOpen })} onClick={toggleCheckboxes}>
                        <input className={styles.input} type="text" disabled value='Выберите права доступа' />
                        {checkboxIsOpen && <PermissionsCheckbox className={styles.checkbox} onChange={setPermissions} value={permissions} />}
                    </div>
                    <Button className={styles.submitButton} type='submit'>Отправить приглашение</Button>
                </form>
            </ModalWindow>
        </div>
    )
}

export default AddUserForm