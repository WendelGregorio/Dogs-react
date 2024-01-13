import React from 'react'
import UserHeader from './UserHeader'
import { Routes, Route } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../Context/UserContext'
import NotFound from '../NotFound/NotFound'

function User() {
  const { data } = React.useContext(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/Dogs-react/" element={<Feed user={data.id} />} />
        <Route path="/Dogs-react/postar" element={<UserPhotoPost />} />
        <Route path="/Dogs-react/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
