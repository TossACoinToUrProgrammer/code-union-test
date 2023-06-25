import React, { useContext } from 'react'
import { IUser } from '../../types'
import { ReactComponent as DotsIcon } from '../../assets/icons/dots.svg'
import Tag from '../tag'
import styles from './styles.module.scss'
import ModalWindow from '../modal-window'
import { AppStateContext } from '../../contexts/AppStateContext'
import profileLogo from '../../assets/icons/profile.svg'

interface UsersItemProps {
    user: IUser
}

const UsersItem: React.FC<UsersItemProps> = ({ user }) => {
    const { deleteUser, sendMail } = useContext(AppStateContext)

    const deleteHandler = () => {
        deleteUser(user.email)
    }

    const sendMailHandler = () => {
        sendMail(user.email)
    }

    return (
        <div className={styles.userItem}>
            <div><img src={user.image || profileLogo} alt="" className={styles.profilePic} /></div>
            <div className={styles.body}>
                <div>
                    <span className={styles.name}>{user.name}</span>
                    <span></span>
                    <span className={styles.email}>{user.email}</span>
                </div>
                <div className={styles.tags}>{user.permissions.map(permission => <Tag key={permission}>{permission}</Tag>)}</div>
            </div>
            <div className={styles.button}>
                <DotsIcon />
                <ModalWindow className={styles.popup}>
                    <button>Изменить права доступа</button>
                    <button onClick={sendMailHandler}>Отправить код повторно</button>
                    <button onClick={deleteHandler}>Удалить пользователя</button>
                </ModalWindow>
            </div>
        </div>
    )
}

export default UsersItem
