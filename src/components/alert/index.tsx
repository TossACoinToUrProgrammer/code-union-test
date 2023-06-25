import React, { useContext } from 'react'
import styles from './styles.module.scss'
import ModalWindow from '../modal-window'
import Button from '../button'
import { AppStateContext } from '../../contexts/AppStateContext'

const Alert = () => {
    const { alert, setAlert } = useContext(AppStateContext)

    if(!alert) return null

    return (
        <ModalWindow className={styles.alert}>
            <span>{alert}</span>
            <Button onClick={() => setAlert(null)}>Закрыть</Button>
        </ModalWindow>
    )
}

export default Alert