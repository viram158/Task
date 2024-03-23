

import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaUser, FaCog, FaBell, FaProjectDiagram, FaInfoCircle, FaEnvelope ,FaUserSlash} from 'react-icons/fa';
import veuxy from './vuedashboard.svg'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    

    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <header className="header">
   
    <button onClick={toggleSidebar} className="toggle-btn">
      {isOpen ? <i class='bx bx-left-arrow-circle' ></i> : <i class='bx bx-right-arrow-circle'></i>}
    </button>
  </header>
      <div className="content-sidebar1">
        {isOpen ? (
          <>
          <div className="sidebar-logo-vue">
           <img src={veuxy} alt="Veuxy Logo" />
    <p>Vuexy</p>
          </div>
           <div className="content-sidebar">
            <ul className='ul-sidebar'>
              <li className='li-sidebar'>
                <FaHome /> <NavLink href="/">Dashboard</NavLink>
              </li>
              <li className="dropdown li-sidebar">
          <span className="dropdown-btn">
            <div>
          <FaInfoCircle/>  Categories
            </div>
            <div className="dropdown-content">
              <NavLink to="/add-category">Add Category</NavLink>
              <NavLink to="/category-list">Category List</NavLink>
            </div>
          </span>
        </li>
         
            </ul>
            </div>
          </>
        ) : (
          <>
            <div className="closed-icons">
              <FaHome />
            
            </div>
          </>
        )}
      </div>
    </div>

    
  );
}

export default Sidebar;


