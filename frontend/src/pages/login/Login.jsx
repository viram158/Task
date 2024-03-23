import React, { useState } from 'react'
import loginimage from './auth-login-illustration-light.png'
import logo from './logo.svg';
import './login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../API/ApiController';
export default function Login() {
  const [useremail,setuseremail]=useState();
  const [password,setpassword] = useState();
  const navigate = useNavigate()
  const login =(e)=>{
   e.preventDefault();
   ApiService.Login({
    usernameOrEmail:useremail,
    password:password
   }).then((response)=>{
    if(response.data.status === true){
      console.log(response.data)
      const authtoken =  response.data.token
      sessionStorage.setItem('authtoken',authtoken);
      navigate('/');
      window.location.reload();
    }else{
      console.log(response)
    }
   }).catch((err)=>{
    console.log(err)
   })
  }
  return (
    <div>
      <section className='login-form-section'>
        <div className='login-image'>
            <img src={loginimage} alt="" />
        </div>
        <div className='login-form-section-2'>
            <div className='login-form-logo'>
                <img src={logo} alt="" />
            </div>
        <div className='login-form-text'>
            <p className='login-form-text-p-1'>Welcome to Vuexy!👋</p>
            <p>Please Sign-in to your Account and start the adventure</p>
        </div>
            <form className='form-login' onSubmit={login} >
                <div className='form-group'>
                 <label htmlFor="" className='form-label'>Email or Username</label>
                  <input type="text" value={useremail} onChange={(e)=>setuseremail(e.target.value)} className='form-control' placeholder='Enter your Email or Username' />
                </div>
                <div>
                  <label className='login-form-password-section'>
                    <label htmlFor="" >Password</label>
                     <p>Forget Password?</p>
                  </label>
                  <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className='form-control' placeholder='Enter Password'/>
                </div>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Remember me
  </label>
</div>
                <div className='login-sign-in-btn'>
                    <button>Sign in</button>
                </div>
                <div className='login-new-account-text'>
                    New to our Platform?<NavLink to="/signup">Create an account</NavLink>
                </div>

            </form>
            <div className="hr-or-line">
            <hr style={{width: '45%', display: 'inline-block'}}/>
            <span style={{margin: '0 10px'}}>or</span>
            <hr style={{width: '45%', display: 'inline-block'}}/>
          </div>
          <div className='social-login-icon'>
            <div className='facebook-icon'><i class='bx bxl-facebook'></i></div>
            <div className='google-icon'><i class='bx bxl-google'></i></div>
            <div className='twitter-icon'><i class='bx bxl-twitter' ></i></div>
          </div>
        </div>
      </section>
    </div>
  )
}
