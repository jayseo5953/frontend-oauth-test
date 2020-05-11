import React,{useContext} from 'react'
import {AuthContext} from '../AuthContext'


  
export default function Profile (){
  const {user,logout} = useContext(AuthContext)

  return (
    <div className="App">
      <header className="App-header">
      <h1>USER PAGE</h1>
        <p>{user?`${user.username}`:"Not Logged In"}</p>
        <p>Hello this is users page</p>
        <button onClick={logout}><h3>Log Out</h3></button>
      </header>
    </div>
  );
}
