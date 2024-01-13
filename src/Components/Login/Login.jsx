import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../Context/UserContext'
import styles from './Login.module.css'
import NotFound from '../NotFound/NotFound'

function Login() {
  const { login } = React.useContext(UserContext)
  if (login === true) return <Navigate to="/Dogs-react/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/Dogs-react/" element={<LoginForm />} />
          <Route path="/Dogs-react/criar" element={<LoginCreate />} />
          <Route path="/Dogs-react/perdeu" element={<LoginPasswordLost />} />
          <Route path="/Dogs-react/resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
