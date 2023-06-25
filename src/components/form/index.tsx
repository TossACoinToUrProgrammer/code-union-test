import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import ModalWindow from '../modal-window'
import Button from '../button'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

interface FormProps {
    close: () => void,
    title?: string,
    submit: (data: any) => void,
    buttonText: string
}

const Form: React.FC<FormProps & PropsWithChildren> = ({ close, title, submit, buttonText, children }) => {
    return (
        <div className={styles.wrapper}>
            <ModalWindow className={styles.modal}>
                <button onClick={close} className={styles.closeButton}><CloseIcon /></button>
                <span className={styles.title}>{title}</span>
                <form className={styles.form} onSubmit={submit}>
                    {children}
                    <Button className={styles.submitButton} type='submit'>{buttonText}</Button>
                </form>
            </ModalWindow>
        </div>
    )
}

export default Form
