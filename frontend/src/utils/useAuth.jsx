// authContext.js
import { createContext, useState, useContext, useEffect, Children } from 'react'
import { useNavigate } from 'react-router-dom'
import { is_authenticated } from '../endpoint/api'
import { login } from '../endpoint/api'

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)
    const naviger = useNavigate()
    const get_authenticated = async () => {
        try {
            const success = await is_authenticated()
            setIsAuthenticated(success)
        } catch {
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }
    const login_user = async (username, password) => {
        const success = await login(username, password)
        if (success) {
            setIsAuthenticated(true)
            naviger('/accueil')
        }
    }
    useEffect(() => {
        get_authenticated()
    }, [window.location.pathname])
    return (
        <>
            <AuthContext.Provider value={{ isAuthenticated, loading, login_user }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export const useAuth = () => useContext(AuthContext)