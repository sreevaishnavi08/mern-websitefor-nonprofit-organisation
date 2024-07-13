import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';

function Navbar() {
  let { user, setUser } = useContext(CounterContext);
  let navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/')
  }

  return (
    <div className='shadow-sm position-sticky top-0 z-3 glass-morphism'>
      <nav className='px-3 pe-5 py-2'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-3 align-items-center'>
            <img style={{height:"60px"}} src={logo} alt="" />
          </div>
          <div className='d-flex gap-5 text-dark'>
            <NavLink className='nav-link' to='/'><b className='fs-5'>Home</b></NavLink>
            <NavLink className='nav-link' to='/products'><b className='fs-5'>Our Products</b></NavLink>
            <NavLink className='nav-link' to='/volunteer'><b className='fs-5'>Volunteer Now</b></NavLink>
            <NavLink className='nav-link' to='/about'><b className='fs-5'>About Us</b></NavLink>
            <NavLink className='nav-link' to='/donate'><b className='fs-5'>Donate Us</b></NavLink>
          </div>
          <div>
            {
              user === null ? (
                <>
                  {/* <NavLink className='nav-link' to='/signup'><b className='fs-5'>SignUp</b></NavLink> */}
                  <NavLink className='nav-link' to='/login'><b className='fs-5'>LogIn</b></NavLink>
                </>
              ) : (
                <div className='d-flex flex-row-reverse gap-4 '>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-gradient rounded-4 p-1 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <CgProfile size={'25px'} className="mb-1" /> <span className="fs-5"><b>{user.firstname}</b></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/profile">Profile</a></li>
                       <li className="dropdown-item" style={{cursor:"pointer"}}  onClick={handleLogout} >Logout</li>
                    </ul>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
