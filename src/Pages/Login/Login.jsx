import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/assets/logo.png'
import google from '../../assets/assets/google.png'
import { login, signUp , signInWithGoogle, googleProvider} from '../../firebase'

function Login() {

    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const user_auth = async (event) => {
        event.preventDefault();
        if (signState === 'Sign In') {
            await login(email, password);
        } else {
            await signUp(name, email, password)
        }
    }

    const google_login = async(event) =>{
        event.preventDefault();
        await signInWithGoogle(googleProvider);
    }

    return (
        <div className='login'>
            <img src={logo} alt="logo.png" className='login-logo' />
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === 'Sign Up' ?
                        <input type="text" name='username' placeholder='Your Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                        : <></>
                    }
                    <input type="email" placeholder='Email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" name='password' placeholder='password' value={[password]} onChange={(e) => { setpassword(e.target.value) }} />
                    <button type='submit' onClick={user_auth}>{signState}</button>
                    <div className="divider">
                        <span className="divider-text">OR</span>
                    </div>
                    <div className="google-sign-in">
                    <button type="submit" className='google-btn' onClick={google_login}>      
                        <img src={google} alt="Facebook" className="google-icon" />
                        <p>Log in with google</p>
                    </button>
                    </div>
                    
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" name='remember-me' />
                            <label >Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="sign-up">
                    {signState === 'Sign In' ?
                        <p>New to netfix? <span onClick={() => { setSignState('Sign Up') }}> Sign Up now</span></p>
                        : <p>Already have an account? <span onClick={() => { setSignState('Sign In') }}> Sign In now</span></p>

                    }
                </div>
            </div>
        </div>
    )
}

export default Login;