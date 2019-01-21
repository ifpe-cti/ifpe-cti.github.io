import axios from 'axios'
import * as actionTypes from '../constants/actionTypes'

const URL = "https://api.github.com/orgs/ifpe-cti/repos"

export const generateList = () => {
    return (dispatch) => {
        axios.get(URL)
            .then(resp => dispatch({
                type: actionTypes.GENERATE_LIST_REPOSITORY,
                payload: resp.data

            }))
    }
}
