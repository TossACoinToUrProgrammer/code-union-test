import React from 'react'
import { IUser } from '../../types'
import styles from './styles.module.scss'
import UsersItem from '../users-item'

interface UsersListProps {
    users: IUser[]
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
    return (
        <div className={styles.list}>
            {users.map(user => <li key={user.email}><UsersItem user={user} /></li>)}
        </div>
    )
}

export default UsersList