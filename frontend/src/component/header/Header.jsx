import React from 'react';
import './Header.css'; // Import CSS file for styles
import {FaUserSlash} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import profile from './profile.png'
export default function Header() {
  const navigate = useNavigate()
  const Logout = (e)=>{
    e.preventDefault();
       sessionStorage.removeItem('authtoken');
       navigate('/login')
       window.location.reload()
  }
  return (
    <div>
      <section>
        <header className="modern-header"> {/* Add a class for styling */}
          <div className="search-container">
            <i className='bx bx-search search-icon'></i>
            <input type="search" placeholder="Search" />
          </div>
          <div className='modern-header-icons'>
            <div className='sun-icon'><i className='bx bx-sun'></i></div>
            <div className='widget-icon'><i className='bx bxs-widget'></i></div>
            <div className='bell-icon'><i className='bx bx-bell'></i></div>
            {/* Profile section */}
            <div className="profile-section">
              <img src={profile} alt="Profile" />
            </div>
            <div className='Logout-section' onClick={Logout}><FaUserSlash/></div>
          </div>
        </header>
      </section>
    </div>
  );
}
