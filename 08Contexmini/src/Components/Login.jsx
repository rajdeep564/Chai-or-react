import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' onChange={(e) =>{
        setUsername(e.target.value)
      }} placeholder='username' value={username} />
      <input type='text' onChange={(e) =>{
        setPassword(e.target.value)
      }}placeholder='Password'value={password}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login