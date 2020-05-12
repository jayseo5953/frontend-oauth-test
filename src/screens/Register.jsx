import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
export default function Register() {
  const history = useHistory()
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
        try {
          const result = await axios.post('http://localhost:3001/auth/register',{email:'jolanga@hotmail.com',password:'123'},{withCredentials: true})
          const user = result.data
          console.log("result: ",result)
          if (!user) {
            history.push('/login');
          }
        }
        catch (err) {
          console.log(err.response)
          if(err.response.status == 400 && err.response.data == 'Email Already Exists') {
            console.log("Email already exists")
            // show this to user
          }
        }
        
      }}><h2>Registser with ID/PW</h2></button>

      <Link to={`/login`}>LOGIN</Link>
    </header>
  </div>
  )
}
