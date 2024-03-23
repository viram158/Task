import React from 'react'
import loginimage from './auth-login-illustration-light.png'
import logo from './logo.svg';
import './login.css'
import { useState } from 'react';
import ApiService from '../../API/ApiController';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Login() {
const [Username,setUsername] = useState('');
const [Email,setEmail] = useState('');
const [password,setPassword]= useState('')
const navigate =  useNavigate()
  const Signup = (e)=>{
    e.preventDefault()
   ApiService.Register({
    username:Username,
    email:Email,
    password:password
   }).then((response)=>{
    Swal.fire({
      icon:'success',
      text:response.data.message
    })
    setEmail('')
    setPassword('')
    setUsername('')
    navigate('/login')
   }).catch((err)=>{
    Swal.fire({
      icon: 'error',
      text:err.response.data.message
    })
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
            <p>Please Sign-up to start the adventure</p>
        </div>
            <form className='form-login' onSubmit={Signup}>
                <div className='form-group'>
                 <label htmlFor="" className='form-label'> Username</label>
                  <input type="text" value={Username} onChange={(e)=> setUsername(e.target.value)} className='form-control' placeholder='Enter your Username' />
                </div>
                <div className='form-group'>
                 <label htmlFor="" className='form-label'>Email </label>
                  <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Enter your Email ' />
                </div>
                <div>
                 
                    <label htmlFor="" >Password</label>
                   
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Enter Password'/>
                </div>
               
                <div className='login-sign-in-btn'>
                    <button type='submit'>Sign Up</button>
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
