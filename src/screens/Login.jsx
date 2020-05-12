import React,{useContext} from 'react'
import {AuthContext} from '../AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import axios from 'axios';
export default function Login () {
  const {login} = useContext(AuthContext)
  const history = useHistory()
  return (
    <div className="App">
      <header className="App-header">
      <h1>LOGIN PAGE</h1>

        <button><a href='http://localhost:3001/auth/google'><h2>LOGIN WITH HREF</h2></a></button>
        
      <button onClick={async()=>{
        const result = await axios.post('http://localhost:3001/auth/login',{email:'jolanga@hotmail.com',password:'123'},{withCredentials: true});
        const user = result.data;
        if (user) {
          login(user);
          history.push('/profile')
        }
        console.log(result);
      }}>
      <h2>Login with ID/PW</h2>
      </button>


      <button onClick={async()=>{
        const result = await axios.get('http://localhost:3001/auth/check',{withCredentials: true});
        console.log(result.data)
      }}>check</button>
{/*         
        <form action='http://localhost:3001/auth/login' method='post'
          onSubmit={e=>{
            e.preventDefault()
            console.log(e)}}>
          <div>
            <label for='userId'>ID</label>
            <input type='text' id='userId' name='userId' required />
          </div>
          <div>
            <label for='password'>PW</label>
            <input type='password' id='password' name='password' required />
          </div>
          <button type='submit'>Login With ID/PW</button>
        </form> */}
     
        <Link to={`/register`}>REGISTER</Link>
      </header>
    </div>
  );
}
