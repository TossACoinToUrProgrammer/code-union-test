import React from 'react'
import cn from 'classnames'

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import styles from './styles.module.scss'

const SearchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input type="text" {...props} />
            <SearchIcon className={styles.searchIcon} />
        </div>
    )
}

export default SearchInput