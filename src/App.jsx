import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {

    const [user, setUser] = useState({})
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage setUser={setUser}/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/dashboard/:userName' element={<DashboardPage user={user} setUser={setUser} />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
