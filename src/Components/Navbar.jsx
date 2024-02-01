import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserAuthentication from '../hooks/UserAuthentication'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate()
  const {isLoading, signOutCall} = UserAuthentication()
  const user = useSelector(({user}) => user.user)
  
  const handelLogout = async() => {
    await signOutCall()
  }
  return (
    <div className='flex px-4 py-2 justify-between shadow-md'>
      <div>
        <Link to={'/'} className='text-2xl font-bold'>Code</Link>
        {user && <p>{user.email}</p>}
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'} className='mx-3'>About</Link>
        {user ? <button onClick={handelLogout}>Logout</button>: <Link to={'/login'}>Login</Link>}
      </div>
    </div>
  )
}

export default Navbar
