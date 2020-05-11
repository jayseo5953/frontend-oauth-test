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

function App() {
  const [ user, setUser ] = useState(null)

  const authContext = useMemo(()=>{
    return{
      user,
      setUser,
      login: async () => {
        window.location='/auth/google'
      },
      logout: async () => {
        await axios.get('/auth/logout',{withCredentials: true});
        setUser(null);
    }
  }
  },[user]);

  useEffect(()=>{
    axios.get('/auth/user',{withCredentials: true})
      .then(res=>{
        console.log("res ",res.data)
        const currentUser = res.data.id?res.data:null;        
        setUser(currentUser);
      })
  },[])

  return (
    <AuthContext.Provider value={authContext}>
      <Router>
        <Switch>
          <Route path="/profile" render={(routeProps) => <Profile/> }/>
          <Route path="/" render={(routeProps) => <Login /> }/>
        </Switch>
      </Router>
    </AuthContext.Provider>

  )
}

export default App;
