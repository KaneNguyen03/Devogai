import { useAuth } from '@/hooks/use-auth'
import { IdleTimerProvider } from 'react-idle-timer'

export default function IdleTimerWrapProvider({ children }) {
  const { logoutMutation } = useAuth()

  const onIdle = () => {
    logoutMutation.mutate()
  }

  return (
    <IdleTimerProvider timeout={1000 * 3600} onIdle={onIdle}>
      {children}
    </IdleTimerProvider>
  )
}
