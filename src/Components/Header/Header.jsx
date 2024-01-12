import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../../Assets/dogs.svg?react'
import { UserContext } from '../../Context/UserContext'

function Header() {
  const { data } = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          className={styles.logo}
          to="/Dogs-react/"
          aria-label="Dogs - Home"
        >
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/Dogs-react/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/Dogs-react/login">
            {data && data.email}
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
