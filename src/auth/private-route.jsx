import { useAuth } from '../hooks/use-auth'
import apiInstance, { REFRESH_TOKEN_KEY, TOKEN_KEY, logOutApp } from '../lib/axios/index'
import { ROUTE_PATHS } from '@/router'
import authApi from '@/services/auth'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children, roles }) {
  const { user } = useAuth()
  console.log("🚀 Kha ne ~ user:", user)

  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
  const tokenKey = localStorage.getItem(TOKEN_KEY)

  if (!refreshToken || !tokenKey) {
    logOutApp()
  }

  useEffect(() => {
    const checkTokenExpiration = setInterval(async () => {
      const resp = await authApi.refreshToken(tokenKey || '')
      if (!resp) {
        logOutApp()
        return false
      }
      const accessToken = resp.accessToken
      const newRefreshToken = resp.refreshToken
      localStorage.setItem(TOKEN_KEY, accessToken)
      localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken)
      apiInstance.defaults.headers.common['Authorization'] = `${accessToken}`
    }, 1000 * 60) // Refresh the token every minute

    return () => clearInterval(checkTokenExpiration) // Clear interval on component unmount
  }, [refreshToken, tokenKey])

  // if (!user) {
  //   const token = localStorage.getItem(TOKEN_KEY)
  //   if (!token) {
  //     return <Navigate to={ROUTE_PATHS.LOGIN} replace />
  //   }
  // }

  if (roles && user && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  // if (!user || user?.role !== 'admin') {
  //   return <Navigate to={ROUTE_PATHS.LOGIN} replace />
  // }

  return children
}