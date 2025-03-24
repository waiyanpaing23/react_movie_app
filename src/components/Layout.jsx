import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='bg-stone-800 min-h-screen text-white'>
        <Navbar />
        <div className='p-7'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout