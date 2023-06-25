import React, { useContext } from 'react'
import styles from './styles.module.scss'
import ModalWindow from '../modal-window'
import Button from '../button'
import { AppStateContext } from '../../contexts/AppStateContext'

const Alert = () => {
    const { state, setAlert } = useContext(AppStateContext)

    if(!state.alert) return null

    return (
        <ModalWindow className={styles.alert}>
            <span>{state.alert}</span>
            <Button onClick={() => setAlert(null)}>Закрыть</Button>
        </ModalWindow>
    )
}

export default Alert