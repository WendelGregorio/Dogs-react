import React from 'react'
import { UserContext } from '../../Context/UserContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { login } = React.useContext(UserContext)

  return login ? children : <Navigate to="/Dogs-react/login" />
}

export default ProtectedRoute
