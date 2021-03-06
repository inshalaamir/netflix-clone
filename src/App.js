import React, {useEffect} from 'react';
import './App.css';
import './screens/HomeScreen'
import Homescreen from './screens/HomeScreen';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Loginscreen from "./screens/LoginScreen"
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux"
import {login, logout, selectUser} from "./features/userSlice"
import ProfileScreen from "./screens/ProfileScreen"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        }))
      }
      else{
          dispatch(logout())
      }
    })

    return unsubscribe
    
  }, [dispatch])

  return (
    <div className="app">

    <Router>
      {
        !user ? (
          
          <Loginscreen/>
        
        ): (
          
      <Switch>
        <Route exact path="/profile">
          <ProfileScreen/>
        </Route>
        <Route exact path="/">
          <Homescreen/>
        </Route>
      </Switch>
        )
      }

      
    </Router>

    </div>
  );
}

export default App;
