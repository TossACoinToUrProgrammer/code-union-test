import React from 'react'
import { IUser } from '../../types'
import { ReactComponent as DotsIcon } from '../../assets/icons/dots.svg'
import Tag from '../tag'
import styles from './styles.module.scss'
import ModalWindow from '../modal-window'

interface UsersItemProps {
    user: IUser
}

const UsersItem: React.FC<UsersItemProps> = ({ user }) => {
    return (
        <div className={styles.userItem}>
            <div><img src={user.image} alt="" className={styles.profilePic} /></div>
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
                    <button>Отправить код повторно</button>
                    <button>Удалить пользователя</button>
                </ModalWindow>
            </div>
        </div>
    )
}

export default UsersItem
