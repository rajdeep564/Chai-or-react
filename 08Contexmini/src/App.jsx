
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UsercontextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UsercontextProvider>
    <h1>Chai or react</h1>
    <Login />
    <Profile />
    </UsercontextProvider>
  )
}

export default App
