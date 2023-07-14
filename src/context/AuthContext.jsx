import { createContext, useContext, useState, useEffect } from 'react'
// import api from '../utils/api'

// import { useState } from "react"

// const AuthContext = createContext(null)

// // custom hook
// export const useAuth = () => useContext(createContext)

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     // check if user exists here
//   }, [])

//   const login = (user) => {
//     setUser(user)
//   }

//   const logout = (user) => {
//     setUser(null)
//   }

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider


const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setauth] = useState()

    return (
        <AuthContext.Provider value={{ auth, setauth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext