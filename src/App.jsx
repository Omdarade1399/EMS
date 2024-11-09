import React, {useContext, useEffect, useState} from 'react'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    const admin = authData.admin.find((e)=> email===e.email && password===e.password)
    if(authData && admin){
        setUser("admin")
        setLoggedInUserData(admin)
        localStorage.setItem("loggedInUser", JSON.stringify({role:"admin", data: admin}))
    }else if(authData){
      const employee = authData.employees.find((e)=> email===e.email && password===e.password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", data: employee}))
      }
    }else{
      alert("Invalid Credentials")
    }
  }  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ""}
      {user === "admin" ? <AdminDashboard data={loggedInUserData}/> : (user === "employee" ? <EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
