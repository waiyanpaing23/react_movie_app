import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { api, api_key } from '../api/apiResource'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/action/movies'

const Search = () => {

    const [searchData, setSearchData] = useState('')
    const dispatch = useDispatch()

    const searchMovie = async() => {
        if(searchData !== '') {
            const res = await api.get(`search/movie?query=${searchData}&api_key=${api_key}`)
            dispatch(fetchMovies(res.data.results))
            setSearchData('')
        } else {
            const res = await api.get(`movie/popular?api_key=${api_key}`)
            dispatch(fetchMovies(res.data.results))
        }
    }

    return (
        <div className='flex justify-between items-center border-1 border-gray-400 rounded-xl px-4 py-2 sm:mt-0 mt-2'>
            <input type='text' placeholder='Search Movies' className='focus:outline-none' onChange={(e) => setSearchData(e.target.value)} />
            <button type='button' className='text-white' onClick={() => searchMovie()}><IoSearch className='text-lg cursor-pointer' /></button>
        </div>
    )
}

export default Search