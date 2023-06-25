import React, { useState } from 'react'
import styles from './styles.module.scss'
import SearchInput from '../../components/search-input'
import Button from '../../components/button'
import UsersList from '../../components/users-list'
import users from '../../users.json'
import AddUserForm from '../../components/add-user-form'

const TeamPage = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)

  const onSubmit = (data: any) => {
    console.log('data', data)
    closeForm()
  }

  const closeForm = () => {
    setFormIsOpen(false)
  }

  const openForm = () => {
    setFormIsOpen(true)
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h3 className={styles.title}>Команда</h3>
        <SearchInput placeholder='Поиск по Email' className={styles.searchInput} />
        <Button className={styles.button} onClick={openForm}>Добавить пользователя</Button>
      </div>
      <UsersList users={users} />
      {formIsOpen && <AddUserForm submit={onSubmit} close={closeForm} />}
    </div>
  )
}

export default TeamPage
