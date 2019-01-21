import * as actionTypes from '../constants/actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.GENERATE_LIST_REPOSITORY:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}