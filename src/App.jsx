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

function App() {
  return (
    <div>
      <Head title="Dogs" />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/Dogs-react/*" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
