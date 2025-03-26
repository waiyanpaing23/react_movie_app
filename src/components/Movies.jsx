import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const Movies = () => {

  const movies = useSelector((state) => state.movies.movies)

  return (
    <div className='flex justify-center'>
      {movies.length > 0 ?
        <div className='w-3/4 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8'>
          {movies.map(movie => <Card key={movie.id} movie={movie} />)}
        </div> :
        <Loader />
        }
    </div>
  )
}

export default Movies