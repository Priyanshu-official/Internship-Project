import React  from 'react';
import SearchIcon from '@material-ui/icons/Search'
import '../header/Nav.css'
import Logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import {auth} from '../../Server/firebase'
import { useStateValue } from '../../Server/stateProvider';

function NavBar() {

  const [{loggedinuser}, dispatch] = useStateValue();

  const logoutUser = () =>{
    if(loggedinuser){
      auth.signOut();
    }
  }

  return (
    <nav className="header"> 
      <img className="Logo" src={Logo}  alt="Logo" />
      <div className="headerSearch">
          <input className="searchInput" placeholder="Search"/>
            <div className="searchIcon">
            <SearchIcon/>
          </div>
      </div>
      {/* 1st Link */}
      <Link to= {!loggedinuser && '/login'} className="headerLink">
        <div onClick ={logoutUser} className="headerOption"> 
          <Button className="signButton" variant="contained" color="primary">
          {loggedinuser ? 'Signout' : 'Sign In'}
          </Button>
        </div>
      </Link>
      <div className="headerOption"> 
         <span className="msg"> Hey! {loggedinuser?.email}</span>
      </div>


      {/* 2st Link */}
      <Link to= "#" className="headerLink">
        <div className="headerCart"> 
          <ShoppingCartIcon classsName="shoppingCart"/>
          <span className="auth cartCount">2</span> 
        </div>
      </Link>

    </nav>

  )
}

export default NavBar
