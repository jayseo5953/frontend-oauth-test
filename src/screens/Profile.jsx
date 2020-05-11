import React,{useContext} from 'react'
import {AuthContext} from '../AuthContext'
import { Link, useHistory } from "react-router-dom"


  
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
          await logout();
          history.push('/login')
        }}><h3>Log Out</h3></button>
      </header>
    </div>
  );
}
