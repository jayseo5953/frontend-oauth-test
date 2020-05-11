import React,{useContext} from 'react'
import {AuthContext} from '../AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home (){
  const {user,logout} = useContext(AuthContext)

  return (
    <div className="App">
      <header className="App-header">
      <h1>Home</h1>
      <Link to={`/login`}>START</Link>
      </header>
    </div>
  );
}