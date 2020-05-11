import React, {useState, useEffect, useMemo} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import Profile from './screens/Profile'
import Login from './screens/Login'
import Home from './screens/Home'
import Register from './screens/Register'

function App() {
  const [ user, setUser ] = useState(null)

  const authContext = useMemo(()=>{
    return{
      user,
      setUser,
      login: async (user) => {
        // window.location='http://localhost:3001/auth/google'
        setUser(user)
      },
      logout: async () => {
        await axios.get('http://localhost:3001/auth/logout',{withCredentials: true});
        setUser(null);
    }
  }
  },[user]);

  useEffect(()=>{
    axios.get('http://localhost:3001/auth/user',{withCredentials: true})
      .then(res=>{
        console.log("res ",res.data)
        const currentUser = res.data.id?res.data:null;        
        setUser(currentUser);
      })
  },[])

  console.log("USER STATE: ", user)

  return (
    <AuthContext.Provider value={authContext}>
      <Router>
        <Switch>
          <Route path="/profile" render={(routeProps) => <Profile/> }/>
          <Route path="/register" render={(routeProps) => <Register /> }/>
          <Route path="/login" render={(routeProps) => <Login /> }/>
          <Route path="/" render={(routeProps) => <Home /> }/>
        </Switch>
      </Router>
    </AuthContext.Provider>

  )
}

export default App;
