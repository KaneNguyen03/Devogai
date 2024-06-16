import React, { createContext, useContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useAuth } from '../hooks/use-auth'

// Create a QueryClient
const queryClient = new QueryClient()

// Create the AuthContext
export const AuthContext = createContext()

// Create the AuthProvider that uses the useAuth hook
export const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
    </QueryClientProvider>
  )
}

// Create a custom hook that uses the AuthContext for accessing auth state
export const useAuthContext = () => useContext(AuthContext)