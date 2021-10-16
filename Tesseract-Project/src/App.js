import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './component/header/NavBar';
import Login from './component/login/login';
import Category from './component/home/category';
import Main from './component/home/main';
import Checkout from './component/checkout/checkout';
import {auth} from './Server/firebase'
import { useStateValue } from './Server/stateProvider';
import {useEffect} from 'react'

function App() {

  const [{loggedinuser}, dispatch] = useStateValue()

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user:userauth
        })
      }
      else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
    return () => {
      unsubscribe()
    }
  },[])  

  return (
    <Router>
      <div className="App">

        
        <Switch>
        <Route path="/home">
            <NavBar />
            <Category />
            <Main />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
