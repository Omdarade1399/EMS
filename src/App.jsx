import React, {useContext, useState} from 'react'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email === "admin@me.com" &&  password === "123"){
      setUser("admin")
    }else if(email === "user@me.com" && password === "123" ){
      setUser("employee")
    }else{
      alert("Invalid Credentials")
    }
  }  

  const data = useContext(AuthContext)
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "employee" ? <EmployeeDashboard /> : ""}
    </>
  )
}

export default App
