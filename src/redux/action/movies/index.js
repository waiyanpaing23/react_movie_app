import { ActionTypes } from '../action-types';

export const fetchMovies = (movies) => {
    return {
        type: ActionTypes.FETCH_MOVIES,
        payload: movies
    }
}

export const selectMovie = (movie) => {
    return {
        type: ActionTypes.SELECT_MOVIE,
        payload: movie
    }
}