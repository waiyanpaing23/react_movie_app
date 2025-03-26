import React from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import { Link } from 'react-router'
import Search from './Search'

const Navbar = () => {

  return (
    <div className=' flex justify-center bg-stone-900 border-b-1 border-b-gray-600'>
        <div className='w-3/4 sm:flex block justify-between items-center p-4'>
            <Link to="/">
              <p className='text-xl font-bold'><BiCameraMovie className='inline me-2 mb-1' />ReelTime</p>
            </Link>
            <Search />
        </div>
    </div>
  )
}

export default Navbar