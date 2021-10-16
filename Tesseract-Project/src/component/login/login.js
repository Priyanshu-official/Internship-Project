import React, {useState} from 'react';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../login/login.css';
import {auth} from '../../Server/firebase'
import { useHistory } from 'react-router';
import  Logo from '../image/logo.png'
import { Link } from 'react-router-dom';



function Login() {

    const history = useHistory();
    const [useremail, setUserEmail] = useState('');
    const [ userpassword, setUserPassword] = useState('');

    const loginuser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/home')
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth => {
            history.push('/home');
        })
        .catch(e =>alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/home"> 
                <div className="loginLogo">
                    <img  src={Logo}  alt="Logo" />
                </div>
            </Link>
            <h3 className="alertMsg"> To Create Account just Input details and Hit Sign Up Button</h3>

            <div className="loginContainer">
                <h1> LogIn</h1>
                <form>
                    <div className="inputContainer">
                        <MailOutlineIcon className="Icon"/>
                        <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" placeholder="Enter Your E-mail"/>
                    </div>
                    <div className="inputContainer">
                        <LockOpenIcon className="Icon" />
                        <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"  placeholder="Enter Password"/>
                    </div>
                    <p>Forget Password</p>
                    <button  type="submit" onClick={loginuser} className="loginButton">Log-In</button>
                    <button onClick={signupuser} className="sigupButton" >Sign-up</button>
                </form>
            </div>
        </div>
    )
}

export default  Login;