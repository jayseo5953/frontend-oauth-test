import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Register() {
  return (
    <div className="App">
    <header className="App-header">
    <h1>REGISTER PAGE</h1>
        {/* <form action='http://localhost:3001/auth/register' method='post'>
          <div>
            <label for='userId'>ID</label>
            <input type='text' id='userId' name='userId' required />
          </div>
          <div>
            <label for='password'>PW</label>
            <input type='password' id='password' name='password' required />
          </div>
          <button type='submit'>Register</button>
        </form> */}
      <button onClick={async()=>{
        const result = await axios.post('http://localhost:3001/auth/register',{id:'sjs5953',pw:'123'},{withCredentials: true})
        const user = result.data
        console.log(result)
      }}><h2>Registser with ID/PW</h2></button>

      <Link to={`/login`}>LOGIN</Link>
    </header>
  </div>
  )
}
