import { useEffect, useRef } from 'react'
import './App.css'
import AppRouter from './router/AppRouter'
import { useAuth } from './store/useAuth.store'

function App() {

  const checkAuth = useAuth(state => state.checkAuth)
  const isLoading = useAuth(state => state.isLoading)

  const hasChecked = useRef(false)

  useEffect(() => {
    if (!hasChecked.current){
      hasChecked.current = true
      checkAuth()
    }
  }, [checkAuth])

  if (isLoading) {
    return <p>Cargando sesión...</p>
  }

  return (
    <>
      <AppRouter />

    </>
  )
}

export default App
