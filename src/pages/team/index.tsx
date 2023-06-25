import React, { useState, useContext } from 'react'
import styles from './styles.module.scss'
import SearchInput from '../../components/search-input'
import Button from '../../components/button'
import UsersList from '../../components/users-list'
import AddUserForm from '../../components/add-user-form'
import { AppStateContext } from '../../contexts/AppStateContext'
import { ReactComponent as BurgerIcon } from '../../assets/icons/nav-burger.svg'

const TeamPage = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)
  const { users, addUser, toggleNavbar } = useContext(AppStateContext)

  const onSubmit = (data: any) => {
    addUser({ permissions: data.permissions, email: data.email, name: "Пользователь" })
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
        <h3 className={styles.title}><span className={styles.mobileBurger} onClick={toggleNavbar}><BurgerIcon /></span> Команда</h3>
        <SearchInput placeholder='Поиск по Email' className={styles.searchInput} />
        <Button className={styles.button} onClick={openForm}>Добавить пользователя</Button>
      </div>
      <UsersList users={users} />
      {formIsOpen && <AddUserForm submit={onSubmit} close={closeForm} />}
    </div>
  )
}

export default TeamPage
