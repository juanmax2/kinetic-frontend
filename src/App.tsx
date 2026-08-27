import './App.css'
import { LoginForm } from './user/components/loginForm/LoginForm'
import { RegisterPage } from './pages/RegisterPage'
// import { ExercisesList } from './exercises/components/ExercisesList'

function App() {


  return (
    <>
      {/* <ExercisesList /> */}
      <RegisterPage />
      <LoginForm />
    </>
  )
}

export default App
