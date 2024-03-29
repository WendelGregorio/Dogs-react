import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

function UserHeader() {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    switch (location.pathname) {
      case '/Dogs-react/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/Dogs-react/conta/postar':
        setTitle('Poste sua Foto')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
