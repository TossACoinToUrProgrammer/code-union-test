import React from 'react'
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
import cn from 'classnames'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={'/'} className={cn(styles.link, styles.logoIcon)}><LogoIcon /></Link>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" className={styles.profilePic} />
      <Link to={'/'} className={styles.link}><AnalyticIcon /></Link>
      <Link to={'/'} className={styles.link}><ProfileIcon /></Link>
      <Link to={'/'} className={styles.link}><BannersIcon /></Link>
      <Link to={'/'} className={styles.link}><ChatsIcon /></Link>
      <Link to={'/'} className={styles.link}><ModerationIcon /></Link>
      <Link to={'/'} className={styles.link}><TeamIcon /></Link>
      <Link to={'/'} className={styles.link}><BlogIcon /></Link>
      <Link to={'/'} className={styles.link}><CurrencyIcon /></Link>
      <Link to={'/'} className={styles.link}><ExitIcon /></Link>
    </nav>
  )
}

export default Navbar