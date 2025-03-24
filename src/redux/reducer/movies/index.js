import { ActionTypes } from '../../action/action-types'

const initialState = {
    movies : [],
    movie : {}
}

const movieReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_MOVIES:
            return {...initialState, movies : payload}
        case ActionTypes.SELECT_MOVIE:
            return {...initialState, movie : payload}
        default:
            return state
    }
}

export default movieReducer