import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/assets/logo.png'

function Login() {

    const [signState,setSignState] = useState("Sign In")

    return (
        <div className='login'>
            <img src={logo} alt="logo.png" className='login-logo' />
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === 'Sign Up' ?
                        <input type="text" name='username' placeholder='Your Name' />
                        : <></>
                    }
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" name='password' placeholder='password' />
                    <button>Sign In</button>
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
                        <p>New to netfix? <span onClick={()=>{setSignState('Sign Up')}}> Sign Up now</span></p>
                        :<p>Already have an account? <span onClick={()=>{setSignState('Sign In')}}> Sign In now</span></p>
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;