import React from 'react'
import styles from './styles.module.scss'
import SearchInput from '../../components/search-input'
import Button from '../../components/button'
import UsersList from '../../components/users-list'
import users from '../../users.json'

const TeamPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h3 className={styles.title}>Команда</h3>
        <SearchInput placeholder='Поиск по Email' className={styles.searchInput} />
        <Button className={styles.button}>Добавить пользователя</Button>
      </div>
      <UsersList users={users} />
    </div>
  )
}

export default TeamPage
