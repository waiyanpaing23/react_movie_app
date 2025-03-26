import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { MdArrowBackIos } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { api, api_key } from '../api/apiResource'
import { selectMovie } from '../redux/action/movies'
import Loader from './Loader'

const Detail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getDetail = async() => {
    const res = await api.get(`movie/${id}?api_key=${api_key}`)

    dispatch(selectMovie(res.data))
  }

  useEffect(() => {
    getDetail()
  }, [id])

  const movie = useSelector((state) => state.movies.movie)

  const genres = movie.genres?.map(genre => genre.name).join(', ')

  return (
    <div>
      {Object.keys(movie).length == 0 ? <Loader /> :
        <div>
          <span className='text-xl font-semibold cursor-pointer' onClick={() => navigate("/")}><MdArrowBackIos className='inline' /> Back</span>
          <div className='w-3/4 mx-auto flex justify-evenly'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} alt='movie' className=' w-auto h-[500px] object-cover shadow-lg rounded-lg' />
            <div className='max-w-md'>
              <span className="text-2xl font-semibold me-3">{movie.title}</span><span className='text-sm '>{ movie.original_language?.toUpperCase() }</span>
              <h1 className="text-lg mb-2">{movie.tagline}</h1>
              <p className="text-md text-gray-300 ">{ genres }</p>
              <p className=' mt-2'>Release Date - { movie.release_date }</p>
              <p className='text-sm  mt-2'><FaStar className='inline mb-1 me-1' /> { movie.vote_average }/10</p>
              <p className='text-gray-300 mt-4'> { movie.overview } </p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Detail