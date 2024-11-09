import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

function AuthProvider({children}) {

  const [userData, setUserData] = useState([])


  useEffect(() => {
    setLocalStorage()
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
  }, [])

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider