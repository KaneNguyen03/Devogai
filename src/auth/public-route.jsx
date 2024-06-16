
import { useAuth } from '../hooks/use-auth'

export default function PublicRoute({ children }) {
  const { user } = useAuth()

  return children
}
