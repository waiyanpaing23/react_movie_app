import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router'

const Card = ({movie}) => {

  const truncateText = (text, limit) => {
    const words = text.split(" ")
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text
  }


  return (
    <div>
        <Link to={`/movies/${movie.id}`}>
          <div className='rounded-lg relative w-full'>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} alt='movie' className=' w-full h-[350px] object-cover shadow-lg rounded-lg'/>
              <div className='absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 hover:opacity-100 text-white p-6 rounded-lg'>
                  <p>{ truncateText(movie.overview, 45) }</p>
              </div>
          </div>
        </Link>
        <h3 className='text-lg font-semibold mt-3'>{ movie.title }</h3>
        <p className='text-sm text-gray-300'><FaStar className='inline mb-1 me-1' /> { movie.vote_average }/10</p>
    </div>
  )
}

export default Card