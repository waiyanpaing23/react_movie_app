import React from 'react'
import { PulseLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
        <PulseLoader color='#fff' />
    </div>
  )
}

export default Loader