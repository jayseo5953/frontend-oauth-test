import React,{useContext} from 'react'
import {AuthContext} from '../AuthContext'
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';

  
export default function Profile (){
  const {user,logout} = useContext(AuthContext)
  const history = useHistory();


  return (
    <div className="App">
      <header className="App-header">
      <h1>USER PAGE</h1>
        <p>{user?`${user.username}`:"Not Logged In"}</p>
        <p>Hello this is users page</p>


        <button onClick={async()=>{
          const result = await axios.get('http://localhost:3001/vacations',{withCredentials:true});
          console.log(result)
        }}>My Vacations</button>

         <button onClick={async()=>{
          const result = await axios.post('http://localhost:3001/vacations',{destination:"bali"},{withCredentials:true});
          console.log(result)
        }}>Create Vacation</button>

        <button onClick={async()=>{
          await logout();
          history.push('/login')
        }}><h3>Log Out</h3></button>
      </header>
    </div>
  );
}
