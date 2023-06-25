import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import { ReactComponent as AnalyticIcon } from '../../assets/icons/analytic.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as BannersIcon } from '../../assets/icons/banners.svg'
import { ReactComponent as ChatsIcon } from '../../assets/icons/chats.svg'
import { ReactComponent as ModerationIcon } from '../../assets/icons/moderation.svg'
import { ReactComponent as TeamIcon } from '../../assets/icons/team.svg'
import { ReactComponent as BlogIcon } from '../../assets/icons/blog.svg'
import { ReactComponent as CurrencyIcon } from '../../assets/icons/currency.svg'
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg'
import { ReactComponent as BurgerIcon } from '../../assets/icons/nav-burger.svg'
import cn from 'classnames'
import { AppStateContext } from '../../contexts/AppStateContext'

const Navbar = () => {
  const { navbarOpen, toggleNavbar } = useContext(AppStateContext)

  return (
    <nav className={cn(styles.navbar, { [styles.navbarOpen]: navbarOpen })}>
      <div className={styles.mobileBurger} onClick={toggleNavbar}><BurgerIcon /></div>
      <Link to={'/'} className={cn(styles.link, styles.logoIcon)}><LogoIcon /></Link>
      <div className={styles.profile}>
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className={styles.profilePic} />
        <div className={styles.profileInfo}>
          <div className={styles.mobileName}>Артем Иванов</div>
          <span>Собственник</span>
        </div>
      </div>
      <Link to={'/'} className={styles.link}><AnalyticIcon /> <span>Аналитика</span></Link>
      <Link to={'/'} className={styles.link}><ProfileIcon /> <span>Профиль</span></Link>
      <Link to={'/'} className={styles.link}><BannersIcon /> <span>Модерация</span></Link>
      <Link to={'/'} className={styles.link}><ChatsIcon /> <span>Чаты</span></Link>
      <Link to={'/'} className={styles.link}><ModerationIcon /> <span>Баннеры</span></Link>
      <Link to={'/'} className={styles.link}><TeamIcon /> <span>Команда</span></Link>
      <Link to={'/'} className={styles.link}><BlogIcon /> <span>Блог</span></Link>
      <Link to={'/'} className={styles.link}><CurrencyIcon /> <span>Курс валют</span></Link>
      <Link to={'/'} className={styles.link}><ExitIcon /> <span>Выйти</span></Link>
    </nav>
  )
}

export default Navbar