import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import { UserStorage } from './Context/UserContext'
import Login from './Components/Login/Login'
import User from './Components/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import Head from './Components/Head/Head'
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile'
import NotFound from './Components/NotFound/NotFound'

function App() {
  return (
    <div>
      <Head title="Dogs" />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/Dogs-react/" element={<Home />} />
            <Route path="/Dogs-react/login/*" element={<Login />} />
            <Route
              path="/Dogs-react/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="/Dogs-react/foto/:id" element={<Photo />} />
            <Route path="/Dogs-react/perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
